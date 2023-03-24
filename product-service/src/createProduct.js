import { errorResponse, successResponse } from "./utils/response.js";

export const createProduct = (dbClient) => async (event) => {
  const requestProduct = JSON.parse(event.body);
  try {
    if (requestProduct.id) {
      const updateProduct = await dbClient.updateProduct(requestProduct);
      if (updateProduct) return successResponse(updateProduct);
      return successResponse( { message: "Product not updated" }, 500 );
    } else {
      const createdProduct = await dbClient.createProduct(requestProduct);
      if (createdProduct) return successResponse(createdProduct);
      return successResponse( { message: "Product not created" }, 500 );
    }
  } catch ( err ) {
    return errorResponse( err );
  }
};
