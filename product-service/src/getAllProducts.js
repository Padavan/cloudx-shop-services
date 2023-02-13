import { errorResponse, successResponse } from "./utils/response.js";
import { mockProductList } from './mockData.js';

export const getAllProducts = async (event) => {
    try {
        return successResponse( mockProductList );
    } 
    catch (err) {
        return errorResponse( err );
    }
}
