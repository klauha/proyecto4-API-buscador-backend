import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"

@Entity("appointments")
export class Appoinment extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: 'appointment_date' })
    appointment_date!: string

    @Column({ name: 'created_at' })
    createdAt!: Date

    @Column({ name: 'updated_at' })
    updatedAt!: Date

   
    @ManyToOne(() => User, (user) => user.appointment)
    @JoinColumn({ name: "user_id" })
    user!: User;
}
