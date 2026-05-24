import { Module } from '@nestjs/common';
import { MatchaController } from './matcha.controller';
import { MatchaService } from './matcha.service';
import { MatchaProductEntity } from './entities/matcha-product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MatchaProductEntity])],
  controllers: [MatchaController],
  providers: [MatchaService],
})
export class MatchaModule {}
