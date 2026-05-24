import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { OrderItemEntity } from './orderItem.entity';

@Entity('order')
export class OrderEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: 0 })
    user_id: number;

    @Column('float')
    total_price: number;

    @Column()
    customer_name: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    pickup_date: string;

    @Column()
    pickup_time: string;

    @OneToMany(() => OrderItemEntity, (orderItem) => orderItem.order, {
        cascade: true,
        eager: true,
    })
    order_items: OrderItemEntity[];
}
