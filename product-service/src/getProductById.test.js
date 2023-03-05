import { describe, it } from 'node:test';
import assert from 'assert';
import { getProductById } from './getProductById.js';

describe('getProductById', () => {
  it("should success path", async () => {
    const mockEvent = {
      pathParameters: {
        productId: 'testId',
      }
    };

    const mockDbClient = {
      "getProductById": (id) => ({ id })
    };

    const response = await getProductById(mockDbClient)(mockEvent);

    assert.equal(JSON.parse(response.body).id, 'testId');
  });
});