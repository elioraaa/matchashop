import { HttpStatus, Injectable } from '@nestjs/common';
import { MatchaProductEntity } from './entities/matcha-product.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ErrorHandler } from '../ErrorHandler/ErrorHandler';
import {
  CreateMatchaProductDTO,
  UpdateMatchaProductDTO,
} from './dto/matcha-product.dto';

@Injectable()
export class MatchaService {
  constructor(
    @InjectRepository(MatchaProductEntity)
    private readonly matchaProductRepository: Repository<MatchaProductEntity>,
  ) {}

  public async getAll() {
    try {
      return await this.matchaProductRepository.find();
    } catch {
      throw new ErrorHandler(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  public async getOne(id: number) {
    const product = await this.matchaProductRepository.findOne({
      where: { id },
    });

    if (!product) {
      throw new ErrorHandler('Matcha product not found', HttpStatus.NOT_FOUND);
    }

    return product;
  }

  public async createMatchaProduct(data: CreateMatchaProductDTO) {
    try {
      return await this.matchaProductRepository.save(data);
    } catch {
      throw new ErrorHandler(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  public async updateMatchaProduct(id: number, data: UpdateMatchaProductDTO) {
    const product = await this.getOne(id);
    const updatedProduct = this.matchaProductRepository.merge(product, data);

    try {
      return await this.matchaProductRepository.save(updatedProduct);
    } catch {
      throw new ErrorHandler(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  public async deleteMatchaProduct(id: number) {
    const product = await this.getOne(id);

    try {
      await this.matchaProductRepository.remove(product);
      return { message: 'Matcha product deleted successfully' };
    } catch {
      throw new ErrorHandler(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
