import { describe, it } from 'node:test';
import assert from 'node:assert';
import { SendMessageCommand } from '@aws-sdk/client-sqs';
import { SQSClient } from '@aws-sdk/client-sqs';
import { mockClient } from 'aws-sdk-client-mock';
import { sendToQueue } from './sendToQueue.js';

describe("sendToQueue", () => {

  it('should invoke sqs client and should return void', async () => {
    const sqsClientMock = mockClient(SQSClient);

    const mockResponse = { MessageId: '1' };
    sqsClientMock.on(SendMessageCommand).resolves(mockResponse);

    const mockData = { hurr: 'durr' };
    const response = await sendToQueue(mockData);

    assert.equal(response, undefined);
  })
})