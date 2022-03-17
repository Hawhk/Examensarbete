package com.exwork.controller

import freemarker.cache.*
import io.ktor.freemarker.*
import io.ktor.application.*
import io.ktor.response.*
import io.ktor.request.*
import io.ktor.routing.*

fun Application.configureTemplating() {
    install(FreeMarker) {
        templateLoader = ClassTemplateLoader(this::class.java.classLoader, "templates")
    }

    routing {
        get("/") {
            call.respond("Hello World!")
        }

        get("/html-freemarker") {
            val data = listOf(2, 5);
            call.respond(FreeMarkerContent("index.ftl", mapOf("data" to data)));
        }
    }
}
data class IndexData(val items: List<Int>)
