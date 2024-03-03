import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Role } from "./Role"
import { Appoinment } from "./Appoinment"

@Entity("users")
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: 'first_name' })
    first_name!: string

    @Column({ name: 'last_name' })
    last_name!: string

    @Column({ name: 'email' })
    email!: string

    @Column({ name: 'password' })
    password!: string

    @Column({ name: 'created_at' })
    createdAt!: Date

    @Column({ name: 'updated_at' })
    updatedAt!: Date

    @ManyToOne(() => Role, (role) => role.users)
    @JoinColumn({ name: "role_id" })
    role!: Role;

    @OneToMany(()=> Appoinment, (appointment)=> appointment.user)
    appointments!: Appoinment[];

   
}
