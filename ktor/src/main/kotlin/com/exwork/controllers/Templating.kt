package com.exwork.controllers

import freemarker.cache.*
import io.ktor.freemarker.*
import io.ktor.application.*
import io.ktor.response.*
import io.ktor.routing.*
import io.ktor.http.content.*

import com.exwork.controllers.*



fun Application.configureTemplating() {
    install(FreeMarker) {
        templateLoader = ClassTemplateLoader(this::class.java.classLoader, "/view")
    }

    routing {
        static("assets") {
            resources("assets")
        }
        static("css") {
            resources("css")
        }
        static("js") {
            resources("js")
        }
        staticPages()
        dynamicPages()
    }
}
