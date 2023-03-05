import csv from 'csv-parser';
import { S3Client, AbortMultipartUploadCommand, GetObjectCommand, CopyObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { errorResponse, successResponse } from "./utils/response.js";
import { sendToQueue } from './sendToQueue.js';

const BUCKET = process.env.BUCKET || 'test';
const client = new S3Client({ region: "eu-central-1" });

export const importFileParser = async (event) => {
  try {
    const { Records } = event;
    const recordList = [];
    for await (const record of event.Records) {
      const objectKey = record.s3.object.key;

      const getParams = {
        Bucket: BUCKET,
        Key: objectKey
      };
      const getCommand = new GetObjectCommand(getParams);
      const response = await client.send(getCommand);
      const Body = response.Body;

      await new Promise((resolve) => {
        Body.pipe(csv())
          .on('error', (error) => {
            console.error(error);
          })
          .on('data', (data) => {
            console.info(data);
            sendToQueue(data);
          })
          .on('end', (id) => {
            resolve('success');
          });
      });

      recordList.push(objectKey);
      await moveObject(objectKey);
    };

    successResponse({ records: recordList });
  } catch(e) {
    console.error(e);
    errorResponse(e);
  }
};


const moveObject = async (key) => {
  const deleteParams = {
    Bucket: BUCKET,
    Key: key,
  };
  const copyParams = {
    Bucket: BUCKET,
    CopySource: `${BUCKET}/${key}`,
    Key: key.replace('uploaded', 'parsed')
  };
  const deleteCommand = new DeleteObjectCommand(deleteParams);
  const copyCommand = new CopyObjectCommand(copyParams)

  await client.send(copyCommand);
  await client.send(deleteCommand);
};