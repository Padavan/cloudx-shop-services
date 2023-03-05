import { PublishCommand, SNSClient } from '@aws-sdk/client-sns';

const client = new SNSClient({ region: "eu-central-1" })  
const TopicArn = process.env.PRODUCTS_TOPIC_ARN;

export const snsPublish = async (listProducts) => {
  const message = 'Created new products.\nNext products where created:\n' + listProducts.map(p => p.title).join(", ");
  try {
    const params = {
      Message: message,
      TopicArn
    };
    const command = new PublishCommand(params);
    const { MessageId } = await client.send(command);
    console.info('Message was published: ', MessageId);
    return;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};