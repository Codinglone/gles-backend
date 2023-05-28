import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Countries {

    @PrimaryGeneratedColumn()
    id: number 

    @Column()
    continent: string 

    @Column()
    country_name: string 

    @Column()
    country_code: string 

    @CreateDateColumn()
    created_at: string 

    @UpdateDateColumn()
    updated_at: string 
}