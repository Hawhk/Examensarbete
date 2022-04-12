package com.exwork.controllers

// import freemarker.cache.*
import io.ktor.freemarker.*
import io.ktor.application.*
import io.ktor.response.*
// import io.ktor.request.*
import io.ktor.routing.*
// import io.ktor.http.*

fun Route.staticPages() {
    route("/static") {
        route("/small") {
            get {
                call.respondTemplate("static_small.html")
            }
        }
        route("/large") {
            get {
                call.respondTemplate("static_large.html")
            }
        }
    }
}