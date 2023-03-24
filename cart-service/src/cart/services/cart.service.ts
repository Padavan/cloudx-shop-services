import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Carts, CartItems } from 'src/typeorm';
import { Repository } from 'typeorm';
import { v4 } from 'uuid';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Carts) private readonly cartRepository: Repository<Carts>,
    @InjectRepository(CartItems) private readonly cartItemRepository: Repository<CartItems>,
  ) {}

  async findByUserId(userId: string): Promise<{ id: string, items: any[]}> | null {
    const userCart = await this.cartRepository.findOneBy({ user_id: userId });
    if (!userCart) {
      return null;
    }
    const cartItems = await this.cartItemRepository.findBy({ cart_id: userCart.id });
    return { id: userCart.id, items: [...(cartItems || [])] }
  }

  async createByUserId(userId: string): Promise<{ id: string, items: any[]}> {
    const id = v4();

    // TODO validation or dto interface
    const userCart = {
      id,
      user_id: userId.toString(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    const newCart = await this.cartRepository.insert(userCart);
    return { id: userId, items: [] }
  }

  async findOrCreateByUserId(userId: string): Promise<{ id: string, items: any[]}> {
    const userCarts = await this.findByUserId(userId);

    if (userCarts) {
      return userCarts;
    }

    return await this.createByUserId(userId);
  }

  async updateByUserId(userId: string, item: {product_id: string, count: number}) {
    const userCart = await this.cartRepository.findOneBy({ user_id: userId });
    const cartItem = await this.cartItemRepository.findOneBy({ cart_id: userCart.id, product_id: item.product_id });


    if (cartItem && item.count === 0) {
      await this.cartItemRepository.delete({ product_id: item.product_id, cart_id: cartItem.cart_id })
    } else if (cartItem) {
      await this.cartItemRepository.update({ product_id: item.product_id, cart_id: cartItem.cart_id }, { count: item.count })
    } else {
      const newItem = {
        cart_id: userCart.id,
        product_id: item.product_id,
        count: item.count
      };

      await this.cartItemRepository.insert(newItem)
    }

  }

  async findCartItems(cartId) {
    return await this.cartItemRepository.findBy({ cart_id: cartId });
  }

  async removeByUserId(userId) {
    const userCart = await this.cartRepository.findOneBy({ user_id: userId });

    this.cartRepository.delete(userCart.id);
    this.cartItemRepository.delete({ cart_id: userCart.id });
  }
}
