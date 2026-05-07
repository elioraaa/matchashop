import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { OrderEntity } from "./order.entity";

@Entity('order_items')
export class OrderItemEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => OrderEntity, (order) => order.order_items)
    order: OrderEntity;

    @JoinColumn({ name: 'order_id' })
    @Column()
    order_id: number;

    @Column()
    product_id: number;

    @Column()
    quantity: number;

    @Column()
    price: number;
}