import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { MatchaService } from './matcha.service';
import {
  CreateMatchaProductDTO,
  UpdateMatchaProductDTO,
} from './dto/matcha-product.dto';

@Controller('matcha-products')
export class MatchaController {
  constructor(private readonly matchaService: MatchaService) { }

  @Get()
  public async getAll() {
    return await this.matchaService.getAll();
  }

  @Get(':id')
  public async getOne(@Param('id', ParseIntPipe) id: number) {
    return await this.matchaService.getOne(id);
  }

  @Post()
  public async createMatchaProduct(@Body() product: CreateMatchaProductDTO) {
    return await this.matchaService.createMatchaProduct(product);
  }

  @Patch(':id')
  public async updateMatchaProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() product: UpdateMatchaProductDTO,
  ) {
    return await this.matchaService.updateMatchaProduct(id, product);
  }

  @Delete(':id')
  public async deleteMatchaProduct(@Param('id', ParseIntPipe) id: number) {
    return await this.matchaService.deleteMatchaProduct(id);
  }
}
