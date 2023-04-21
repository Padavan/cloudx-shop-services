import { Column, Entity, TableForeignKey, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CartItems {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
  })
  id: number;

  @Column({
    name: 'cart_id',
  })
  cart_id: string;

  @Column({
    nullable: false,
    name: 'product_id',
  })
  product_id: string;

  @Column({
    name: 'count',
    nullable: true,
  })
  count: number;
}
