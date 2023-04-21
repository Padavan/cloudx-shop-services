import { Module } from '@nestjs/common';

// import { OrderModule } from '../order/order.module';

import { CartController } from './cart.controller';
import { CartService } from './services';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Carts, CartItems } from 'src/typeorm';

@Module({
  imports: [ TypeOrmModule.forFeature([Carts, CartItems]) ],
  providers: [ CartService ],
  controllers: [ CartController ]
})
export class CartModule {}
