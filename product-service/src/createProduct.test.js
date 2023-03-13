import { describe, it, mock } from 'node:test';
import assert from 'assert';
import { createProduct } from './createProduct.js';

describe('getProductById', () => {
  it("should call create method of DB service and return createdId", async () => {
    const mockEvent = {
      body: JSON.stringify({ title: "testTitle" }),
    };

    const mockCreateFn = mock.fn((product) => ({ id: 'createdId', ...product }));
    const mockUpdateFn = mock.fn((product) => ({ ...product }));

    const mockDbClient = {
      createProduct: mockCreateFn,
      updateProduct: mockUpdateFn
    };

    const response = await createProduct(mockDbClient)(mockEvent);

    assert.equal(JSON.parse(response.body).id, 'createdId');
    assert.equal(mockCreateFn.mock.callCount(), 1);
    assert.equal(mockUpdateFn.mock.callCount(), 0);
  });

   it("should call update method of DB service", async () => {
    const mockEvent = {
      body: JSON.stringify({ id: 'updatedTitle', title: "testTitle" }),
    };

    const mockCreateFn = mock.fn((product) => ({ id: 'createdId', ...product }));
    const mockUpdateFn = mock.fn((product) => ({ ...product }));

    const mockDbClient = {
      createProduct: mockCreateFn,
      updateProduct: mockUpdateFn
    };

    const response = await createProduct(mockDbClient)(mockEvent);

    assert.equal(JSON.parse(response.body).id, 'updatedTitle');
    assert.equal(mockCreateFn.mock.callCount(), 0);
    assert.equal(mockUpdateFn.mock.callCount(), 1);
  });
});