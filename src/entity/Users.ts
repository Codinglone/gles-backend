import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

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

    @Column()
    created_at: string 

    @Column()
    updated_at: string 





}
