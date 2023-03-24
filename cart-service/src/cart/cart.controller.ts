import { Controller, Get, Delete, Put, Body, Header, Headers, Post, HttpStatus, Param } from '@nestjs/common';
import { CartService } from './services';

const getUserId = (authHeader: string | null) => {
  if (!authHeader) {
    return null;
  }
  return authHeader.split(" ")[1];
}

const notAuthorizedResponse = {
  statusCode: HttpStatus.FORBIDDEN,
  message: 'Only authorized users can add goods'
}

@Controller('cart')
export class CartController {
  constructor(
    private cartService: CartService,
    // private orderService: OrderService
  ) {}

  @Get()
  @Header("Access-Control-Allow-Origin", "*")
  @Header("Access-Control-Request-Method", "*")
  @Header("Access-Control-Allow-Headers", "*")
  async findUserCart(@Headers('authorization') authHeader: string) {
    const userId = getUserId(authHeader);
    if (!userId) {
      return notAuthorizedResponse
    }
    const cart = await this.cartService.findOrCreateByUserId(userId);

    return cart
  }

  @Put()
  @Header("Access-Control-Allow-Origin", "*")
  @Header("Access-Control-Request-Method", "*")
  @Header("Access-Control-Allow-Headers", "*")
  async updateUserCart(@Body() body, @Headers('authorization') authHeader: string) { // TODO: validate body payload...
    const userId = getUserId(authHeader);
    if (!userId) {
      return notAuthorizedResponse
    }
    await this.cartService.updateByUserId(userId, body);

    return {
      statusCode: HttpStatus.OK,
      message: 'OK',
    }
  }

  @Delete()
  @Header("Access-Control-Allow-Origin", "*")
  @Header("Access-Control-Request-Method", "*")
  @Header("Access-Control-Allow-Headers", "*")
  clearUserCart(@Headers('authorization') authHeader: string) {
    const userId = getUserId(authHeader);
    if (!userId) {
      return notAuthorizedResponse
    }
    this.cartService.removeByUserId(userId);

    return {
      statusCode: HttpStatus.OK,
      message: 'OK',
    }
  }

  @Post('checkout')
  @Header("Access-Control-Allow-Origin", "*")
  @Header("Access-Control-Request-Method", "*")
  @Header("Access-Control-Allow-Headers", "*")
  checkout(@Body() body, @Headers('authorization') authHeader: string) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Not Implemented',
    }
  }
}
