import { Type } from 'class-transformer';
import {
    IsArray,
    IsEmail,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    ValidateNested,
} from 'class-validator';

class OrderItemDTO {
    @IsNumber()
    productId!: number;

    @IsNumber()
    quantity!: number;

    @IsNumber()
    price!: number;
}

export class CreateOrderDTO {
    @IsString()
    @IsNotEmpty()
    customerName!: string;

    @IsEmail()
    email!: string;

    @IsString()
    @IsNotEmpty()
    phone!: string;

    @IsString()
    @IsNotEmpty()
    pickupDate!: string;

    @IsString()
    @IsNotEmpty()
    pickupTime!: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => OrderItemDTO)
    items!: OrderItemDTO[];
}
