package com.exwork

import io.ktor.server.engine.*
import io.ktor.server.netty.*
import com.exwork.controller.*

fun main() {
    embeddedServer(Netty, port = 8080, host = "0.0.0.0") {
        configureTemplating()
    }.start(wait = true)
}