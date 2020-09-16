import { col } from 'sequelize'
import {
    DataType,
    Table,
    Column,
    Model,
    PrimaryKey,
    HasMany,
    DefaultScope,
    Scopes
} from 'sequelize-typescript'

import { Post } from './Post'
import { Address } from './Address'

@DefaultScope(() => ({
    where: { isDeleted: false }
}))

@Scopes(() => ({
    resources: {
        where: { isDeleted: false },
        include: [
            {
                model: Post,
                required: true,
                where: { isDeleted: false },
                order: col('update_at')
            },
            {
                model: Address,
                required: true,
                separate: true,
                where: { postCode: 2077, isDeleted: false },
            }
        ]
    }
})
)

@Table({ tableName: 'persons' })
class Person extends Model<Person> {

    @PrimaryKey
    @Column({ type: DataType.UUIDV4, defaultValue: DataType.UUIDV4 })
    id!: string

    @HasMany(() => Post, 'personID')
    posts!: Post[]

    @HasMany(() => Address, 'personID')
    address!: Address[]

    @Column
    name!: string

    @Column
    gender!: string

    @Column
    age!: number

    @Column({ field: 'created_at' })
    createdAt!: Date

    @Column({ field: 'updated_at' })
    updatedAt!: Date

    @Column({ field: 'is_deleted' })
    isDeleted!: boolean
}

export { Person }
