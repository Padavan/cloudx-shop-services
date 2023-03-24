import { Column, Entity, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Carts {
  @PrimaryColumn({
    name: 'id',
  })
  id: string;

  @Column({
    nullable: false,
    name: 'user_id',
  })
  user_id: string;

  @Column({
    name: 'created_at',
    nullable: false,
  })
  created_at: string;

  @Column({
    nullable: false,
    name: 'updated_at',
    default: '',
  })
  updated_at: string;
}
