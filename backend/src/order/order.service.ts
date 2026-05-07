import { Injectable } from '@nestjs/common';
import { OrderEntity } from './entities/order.entity';
import { OrderItemEntity } from './entities/orderItem.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(OrderEntity) private orderRepository: Repository<OrderEntity>,
        @InjectRepository(OrderItemEntity) private orderItemRepository: Repository<OrderItemEntity>,
    ) {
        console.log('OrderService initialized');
    }

    public async createOrder(orderData: any): Promise<any> {
        console.log('Creating order with data:', orderData);
        return Promise.resolve({ message: 'Order created successfully' });
    }
}
