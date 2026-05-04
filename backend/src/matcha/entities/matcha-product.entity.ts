import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('matcha_products')
export class MatchaProductEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column('float')
    price: number;

    @Column()
    image: string;

    @Column({ default: 'Signature Matcha' })
    category: string;

    @Column({ default: true })
    is_active: boolean;
}
