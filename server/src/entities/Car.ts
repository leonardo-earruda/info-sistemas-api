import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('cars')
export class Car {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    placa: string;

    @Column({ type: 'text' })
    chassi: string;

    @Column({ type: 'numeric' })
    renavam: number;

    @Column({ type: 'text' })
    modelo: string;

    @Column({ type: 'text' })
    marca: string;

    @Column({ type: 'numeric' })
    ano: number;
}