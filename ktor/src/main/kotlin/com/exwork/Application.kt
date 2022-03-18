package com.exwork

import io.ktor.server.engine.*
import io.ktor.server.netty.*
import com.exwork.controller.*

fun main() {
    embeddedServer(Netty, port = 8080, watchPaths = listOf("exwork"), host = "127.0.0.1") {
        configureTemplating()
    }.start(wait = true)
}