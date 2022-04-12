package com.exwork

import io.ktor.server.engine.*
import io.ktor.server.netty.*

import org.jetbrains.exposed.sql.Database

import com.exwork.controllers.configureTemplating

fun main() {
    embeddedServer(Netty, port = 8080, watchPaths = listOf("exwork"), host = "127.0.0.1") {

        Database.connect("jdbc:postgresql://localhost:5432/exwork", driver = "org.postgresql.Driver", user = "default", password = "default")
        configureTemplating()
    }.start(wait = true)
}