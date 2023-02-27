import { S3Client, AbortMultipartUploadCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { errorResponse, successResponse } from "./utils/response.js";

const BUCKET = process.env.BUCKET;

export const importProductsFile = async (event) => {
    const { queryStringParameters } = event;
    try {
        const catalogName = event.queryStringParameters.name;
        const catalogPath = `uploaded/${catalogName}`;
    
        const putObjectParams = {
            Bucket: BUCKET,
            Key: catalogPath,
            ContentType: 'text/csv'
        };
    
        const clientParams = {
            region: "eu-central-1",
        };

        const client = new S3Client(clientParams);
        const command = new PutObjectCommand(putObjectParams);
        const url = await getSignedUrl(client, command, { expiresIn: 3600 });
        const response = { url, bucket: BUCKET };
    
        return successResponse(url);
    } catch (error) {
        return errorResponse(error);
    }
}
