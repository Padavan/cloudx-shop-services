import { errorResponse, successResponse } from "./utils/response.js";
import { mockProductList } from "./mockData.js";

export const getProductById = async (event) => {
  try {

    const { productId = '' } = event.pathParameters;

    const product = mockProductList.find((p) => productId === p.id);

    if( product )
      return successResponse(product);


    return successResponse( { message: "Product not found" }, 404 );
  } catch ( err ) {
    return errorResponse( err );
  }
}

