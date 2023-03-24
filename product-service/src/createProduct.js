import { errorResponse, successResponse } from "./utils/response.js";

export const createProduct = (dbClient) => async (event) => {
  const requestProduct = JSON.parse(event.body);
  try {

    let product;
    if (requestProduct.id) {
      product = await dbClient.updateProduct(requestProduct);
    } else {
      product = await dbClient.createProduct(requestProduct);
    }


    if(product) {
      return successResponse(product);
    }

    return successResponse( { message: "Product not created" }, 500 );
  } catch ( err ) {
    return errorResponse( err );
  }
};
