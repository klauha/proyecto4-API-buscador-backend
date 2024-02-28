import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("appointments")
export class Appoiment extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: 'appointment_date' })
    appointment_date!: string

    @Column({ name: 'created_at' })
    createdAt!: Date

    @Column({ name: 'updated_at' })
    updatedAt!: Date

}
