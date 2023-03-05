import { describe, it } from "node:test";
import assert from "assert";
import { catalogBatchProcess } from "./catalogBatchProcess.js";

describe("catalogBatchProcess", () => {
  it("should react on message queue", async () => {
    const mockSQSEvent = { Records: [
      {
        messageId: "00000000-0000-0000-0000-0000000000",
        body: JSON.stringify({ title: "testTitle" }),
        eventSource: "aws:sqs",
        eventSourceARN: "arn:aws:sqs:eu-central-1:1234567890:my-queue",
      }
    ]};

    const mockDbClient = {
      createProduct: () => ({ id: 'createdId'}),
    };

    const response = await catalogBatchProcess(mockDbClient)(mockSQSEvent);

    assert.strictEqual(JSON.parse(response.body)[0].product.id, "createdId")
  })

})
