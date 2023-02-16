import { errorResponse, successResponse } from "./utils/response.js";

export const getAllProducts = (dbService) => async (event) => {
  try {
    const productList = await dbService.getAllProducts();

    return successResponse( productList );
  } 
  catch (err) {
    return errorResponse( err );
  }
}
