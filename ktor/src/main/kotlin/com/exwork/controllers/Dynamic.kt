package com.exwork.controller

// import freemarker.cache.*
import org.jetbrains.exposed.sql.transactions.transaction
import io.ktor.freemarker.*
import io.ktor.application.*
import io.ktor.response.*
// import io.ktor.request.*
import io.ktor.routing.route
import io.ktor.routing.Route
import io.ktor.routing.get as routeGet
// import io.ktor.http.*
import org.jetbrains.exposed.sql.EmptySizedIterable
import com.exwork.models.*

fun Route.dynamicPages() {
    route("/dynamic") {
        route("/small") {
            routeGet {
                val article = transaction {
                     Article.findById(1)
                }
                // print(article?.sections)
                val sections = transaction {
                    article?.sections?.iterator()
                }

                while(sections!!.hasNext()) {
                    println(sections.next())
                }
                // val total = transaction{
                //     sections?
                // }
                // println(sections)
                call.respondTemplate("dynamic.ftl", mapOf("article" to article))
            }
        }
        route("/large") {
            routeGet {
                val text = "A large dynamic page!"
                call.respondTemplate("dynamic.ftl", mapOf("text" to text))
            }
        }
    }
}