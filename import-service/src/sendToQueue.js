import { SendMessageCommand, SQSClient } from '@aws-sdk/client-sqs';

const sqsClient = new SQSClient({ region: "eu-central-1" });

const QueueUrl = process.env.SQS_URL;

export const sendToQueue = async (data) => {
  try {
    const params = { QueueUrl, MessageBody: JSON.stringify(data) };
    const command = new SendMessageCommand(params);
    const response = await sqsClient.send(command);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
}