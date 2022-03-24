package com.exwork.models

import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.dao.*
import org.jetbrains.exposed.dao.id.*

import io.ktor.application.*

object Users : IntIdTable() {
    val name = varchar("name", 50)
    val age = integer("age").nullable()
}

class User(id: EntityID<Int>) : IntEntity(id) {
    companion object : IntEntityClass<User>(Users)
    var name by Users.name
    var age by Users.age
}

fun Application.tables() {
    SchemaUtils.createMissingTablesAndColumns(Users)

    val hampus = User.new {
        name = "Hampus Hurtig"
        age = 22
    }
}
