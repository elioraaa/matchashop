import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MatchaModule } from './matcha/matcha.module';
import { MatchaProductEntity } from './matcha/entities/matcha-product.entity';
import { AuthModule } from './auth/auth.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'eliora123',
      database: 'matchashop',
      entities: [MatchaProductEntity],
      synchronize: true,
    }),
    MatchaModule,
    AuthModule,
    OrderModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
