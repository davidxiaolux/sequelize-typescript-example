import {
    DataType,
    Table,
    Column,
    Model,
    PrimaryKey,
    ForeignKey,
    BelongsTo,
    DefaultScope
} from 'sequelize-typescript'

import { Person } from './Person'

@DefaultScope(() => ({
    where: { isDeleted: false }
}))

@Table({ tableName: 'addresses' })
class Address extends Model<Address> {
    @BelongsTo(() => Person)
    property!: Person

    @PrimaryKey
    @Column({ type: DataType.UUIDV4, defaultValue: DataType.UUIDV4 })
    id!: string

    @ForeignKey(() => Person)
    @Column({ unique: 'person_address_id_key', field: 'person_id' })
    personID!: string

    @Column
    unit!: number

    @Column
    street!: string

    @Column
    suburb!: string

    @Column({ field: 'post_code' })
    postCode!: number

    @Column({ field: 'created_at' })
    createdAt!: Date

    @Column({ field: 'updated_at' })
    updatedAt!: Date

    @Column({ field: 'is_deleted' })
    isDeleted!: boolean
}

export { Address }
