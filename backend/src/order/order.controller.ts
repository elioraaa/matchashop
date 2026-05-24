import { Body, Controller, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDTO } from './dto/create-order.dto';

@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) { }

    @Post('create')
    public async createOrder(@Body() orderData: CreateOrderDTO): Promise<any> {
        return await this.orderService.createOrder(orderData);
    }
}
