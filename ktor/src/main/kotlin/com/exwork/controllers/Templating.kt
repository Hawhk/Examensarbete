package com.exwork.controller

import freemarker.cache.*
import io.ktor.freemarker.*
import io.ktor.application.*
import io.ktor.response.*
import io.ktor.routing.*
import io.ktor.http.content.*

import com.exwork.controller.*



fun Application.configureTemplating() {
    install(FreeMarker) {
        templateLoader = ClassTemplateLoader(this::class.java.classLoader, "/view")
    }

    routing {
        static("assets") {
            resources("css")
            resources("assets")
            resources("js")
        }
        staticPages()
        dynamicPages()
    }
}
