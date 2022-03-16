package com.exwork.plugins

import io.ktor.routing.*
import io.ktor.http.*
import io.ktor.application.*
import io.ktor.response.*
import io.ktor.request.*

fun Application.configureRouting() {

    routing {
        get("/") {
            call.respondText("Hello World!")
        }
        get("/small/static") {
            call.respondText("Small static page")
        }
        get("/small/dynamic") {
            call.respondText("Small dynamic page")
        }
        get("/large/static") {
            call.respondText("Large static page")
        }
        get("/large/dynamic") {
            call.respondText("Large dynamic page")
        }
    }
}
