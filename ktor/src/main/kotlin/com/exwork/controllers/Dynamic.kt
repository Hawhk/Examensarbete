package com.exwork.controller

// import freemarker.cache.*
import io.ktor.freemarker.*
import io.ktor.application.*
import io.ktor.response.*
// import io.ktor.request.*
import io.ktor.routing.*
// import io.ktor.http.*

fun Route.dynamic() {
    route("/dynamic") {
        route("/small") {
            get {
                val text = "A small dynamic page!"
                call.respond(FreeMarkerContent("dynamic.ftl", mapOf("text" to text)))
            }
        }
        route("/large") {
            get {
                val text = "A large dynamic page!"
                call.respond(FreeMarkerContent("dynamic.ftl", mapOf("text" to text)))
            }
        }
    }
}