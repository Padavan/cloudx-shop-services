import { describe, it } from 'node:test';
import assert from 'node:assert';
import { PublishCommand, SNSClient } from '@aws-sdk/client-sns';
import { snsPublish } from './snsPublish.js';

describe("publishNotification", () => {

  it('should invoke sns client and should return void', async () => {
    const response = await snsPublish([{ title: "TestTitle"}]);

    assert.equal(response, undefined);
  })
})