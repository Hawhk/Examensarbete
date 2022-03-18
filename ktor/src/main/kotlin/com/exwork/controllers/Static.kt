package com.exwork.controller

// import freemarker.cache.*
// import io.ktor.freemarker.*
import io.ktor.application.*
import io.ktor.response.*
// import io.ktor.request.*
import io.ktor.routing.*
// import io.ktor.http.*

fun Route.static() {
    route("/static") {
        route("/small") {
            get {
                call.respond("A small static page!")
            }
        }
        route("/large") {
            get {
                call.respond("A large static page!")
            }
        }
    }
}