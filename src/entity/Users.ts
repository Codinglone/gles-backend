import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, DeleteDateColumn } from "typeorm"

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email: string

    @Column()
    phone: string 

    @Column()
    address: string

    @Column()
    role: string 

    @Column()
    password_hash: string 

    @CreateDateColumn({type: Date})
    created_at: Date 

    @DeleteDateColumn({type: Date})
    updated_at: Date 





}
