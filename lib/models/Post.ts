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

@Table({ tableName: 'posts' })
class Post extends Model<Post> {
    @BelongsTo(() => Person)
    property!: Person

    @PrimaryKey
    @Column({ type: DataType.UUIDV4, defaultValue: DataType.UUIDV4 })
    id!: string

    @ForeignKey(() => Person)
    @Column({ unique: 'person_post_id_key', field: 'person_id' })
    personID!: string

    @Column
    title!: string

    @Column
    content!: string

    @Column({ field: 'created_at' })
    createdAt!: Date

    @Column({ field: 'updated_at' })
    updatedAt!: Date

    @Column({ field: 'last_injested_at' })
    lastInjestedAt!: Date

    @Column({ field: 'is_deleted' })
    isDeleted!: boolean
}

export { Post }
