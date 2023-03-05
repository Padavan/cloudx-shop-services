import { mock, test } from "node:test";
import assert from "assert";
import { mockClient } from "aws-sdk-client-mock";
import { importFileParser } from "./importFileParser.js";
import { S3Client, AbortMultipartUploadCommand, GetObjectCommand, CopyObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";

test("importFileParser should ", async () => {
  const s3Mock = mockClient(S3Client);

  const mockS3Event = {
    Records: [
      {
        s3: {
          object: {
            key:'testKey'
          }
        }
      },
    ],
  };

  const mockStream = {
    pipe: () => ({
      on: () => ({
        on: () => ({
          on: (id, test) => {test()}
        }),
      })
    })
  };

  s3Mock.on(GetObjectCommand).resolves({ Body: mockStream });
  s3Mock.on(CopyObjectCommand).resolves({});
  s3Mock.on(DeleteObjectCommand).resolves({});

  const response = await importFileParser(mockS3Event);

  assert.equal(response.statusCode, 200);
});
