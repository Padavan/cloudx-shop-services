import { describe, it } from 'node:test';
import assert from 'assert';
import { getAllProducts } from './getAllProducts.js';

describe('getAllProducts', (t) => {
  const mockEvent = {};

  it("Should return success query from db", async () => {
    const mockDbService = {
      getAllProducts: () => [{ id: 'mockId' }],
    };

    const response = await getAllProducts(mockDbService)(mockEvent);

    assert.equal(JSON.parse(response.body)[0].id, 'mockId');
  });

  it("Should return error response if db failed", async () => {
    const mockDbService = {
      getAllProducts: async () => Promise.reject(new Error('fail')),
    };

    const response = await getAllProducts(mockDbService)(mockEvent);

    assert.equal(JSON.parse(response.body).message, 'fail');
  });
});