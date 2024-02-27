
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"


@Entity('roles')
export class Role extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number
    @Column({ name: 'title' })
    name!: string
    
}
