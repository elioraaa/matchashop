import { HttpStatus, Injectable } from '@nestjs/common';
import { OrderEntity } from './entities/order.entity';
import { OrderItemEntity } from './entities/orderItem.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ErrorHandler } from '../ErrorHandler/ErrorHandler';
import { CreateOrderDTO } from './dto/create-order.dto';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(OrderEntity)
        private orderRepository: Repository<OrderEntity>,
        @InjectRepository(OrderItemEntity)
        private orderItemRepository: Repository<OrderItemEntity>,
    ) { }

    public async createOrder(orderData: CreateOrderDTO): Promise<any> {
        try {
            const totalPrice = orderData.items.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0,
            );

            const order = this.orderRepository.create({
                user_id: 0,
                total_price: totalPrice,
                customer_name: orderData.customerName,
                email: orderData.email,
                phone: orderData.phone,
                pickup_date: orderData.pickupDate,
                pickup_time: orderData.pickupTime,
            });

            const savedOrder = await this.orderRepository.save(order);

            const orderItems = orderData.items.map((item) =>
                this.orderItemRepository.create({
                    order: savedOrder,
                    order_id: savedOrder.id,
                    product_id: item.productId,
                    quantity: item.quantity,
                    price: item.price,
                }),
            );

            const savedItems = await this.orderItemRepository.save(orderItems);
            savedOrder.order_items = savedItems;

            return {
                message: 'Order created successfully',
                order: savedOrder,
            };
        } catch (error) {
            throw new ErrorHandler(
                'Unable to process order',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
}
