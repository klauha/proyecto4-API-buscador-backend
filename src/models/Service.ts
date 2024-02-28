import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("services")
export class Service extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: 'services_name' })
    first_name!: string

    @Column({ name: 'description' })
    description!: string

    @Column({ name: 'created_at' })
    createdAt!: Date

    @Column({ name: 'updated_at' })
    updatedAt!: Date

}
