import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Developer extends BaseModel {
     @column({ isPrimary: true })
     public devId: number

     @column.dateTime({ autoCreate: true })
     public createdAt: DateTime

     @column.dateTime({ autoCreate: true, autoUpdate: true })
     public updatedAt: DateTime

     @column()
     public avatarUrl: string

     @column()
     public devName: string
}