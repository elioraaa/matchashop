import { Entity, Column, PrimaryGeneratedColumn, OneToMany, } from "typeorm";
import { OrderItemEntity } from "./orderItem.entity";

@Entity('order')
export class OrderEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;

    @Column()
    total_price: number;

    @OneToMany(() => OrderItemEntity, (orderItem) => orderItem.order)
    order_items: OrderItemEntity[];

}