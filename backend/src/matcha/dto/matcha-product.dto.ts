import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateMatchaProductDTO {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  description!: string;

  @IsNumber()
  @IsNotEmpty()
  price!: number;

  @IsString()
  @IsNotEmpty()
  image!: string;

  @IsString()
  @IsOptional()
  category?: string;

  @IsBoolean()
  @IsOptional()
  is_active?: boolean;
}

export class UpdateMatchaProductDTO {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsOptional()
  price?: number;

  @IsString()
  @IsOptional()
  image?: string;

  @IsString()
  @IsOptional()
  category?: string;

  @IsBoolean()
  @IsOptional()
  is_active?: boolean;
}
