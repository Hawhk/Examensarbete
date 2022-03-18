package com.exwork.controller

import freemarker.cache.*
import io.ktor.freemarker.*
import io.ktor.application.*
import io.ktor.response.*
import io.ktor.routing.*

import com.exwork.controller.*

fun Application.configureTemplating() {
    install(FreeMarker) {
        templateLoader = ClassTemplateLoader(this::class.java.classLoader, "/view")
    }

    routing {
        get("/") {
            call.respond("Hello World!")
        }

        get("/html-freemarker") {
            val data = listOf(2, 5);
            call.respond(FreeMarkerContent("index.ftl", mapOf("data" to data)));
        }
        static()
        dynamic()
    }
}
