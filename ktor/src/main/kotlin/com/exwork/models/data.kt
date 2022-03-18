package com.exwork.models

import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.*

import io.ktor.application.*
import org.jetbrains.exposed.dao.*
import org.jetbrains.exposed.dao.id.*

object Users : IntIdTable() {
    val name = varchar("name", 50)
}

class User(id: EntityID<Int>) : IntEntity(id) {
    companion object : IntEntityClass<User>(Users)
    var name by Users.id
}

fun Application.tables() {
    val user = User.new {  }
}
