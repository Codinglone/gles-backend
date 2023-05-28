import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Users {

    @PrimaryGeneratedColumn('uuid')
    id: string

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

    @UpdateDateColumn({type: Date})
    updated_at: Date 





}
