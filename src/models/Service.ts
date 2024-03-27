import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Appoinment } from "./Appoinment"

@Entity("services")
export class Service extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: 'service_name' })
    serviceName!: string

    @Column({ name: 'description' })
    description!: string

    @Column({ name: 'url_img' })
    urlImg!: string

    @Column({ name: 'created_at' })
    createdAt!: Date

    @Column({ name: 'updated_at' })
    updatedAt!: Date


    @OneToMany(() => Appoinment, (appointment) => appointment.service)
    appointments!: Appoinment[];

}
