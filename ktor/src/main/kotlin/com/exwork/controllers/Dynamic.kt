package com.exwork.controllers

// import freemarker.cache.*
import org.jetbrains.exposed.sql.transactions.transaction
import io.ktor.freemarker.*
import io.ktor.application.*
import io.ktor.routing.route
import io.ktor.routing.Route
import io.ktor.routing.get as routeGet
import com.exwork.models.*


const val SMALL_ARTICLE = 1
const val LARGE_ARTICLE = 2

fun Route.dynamicPages() {
    route("/dynamic") {
        route("/small") {
            routeGet {
                val article = transaction {
                    Article.findById(SMALL_ARTICLE)
                }
                val sections = ArrayList<Section>()

                transaction {
                    article?.sections?.forEach { sections.add(it) }
                }

                call.respondTemplate("dynamic.ftl", mapOf("article" to article, "sections" to sections))
            }
        }
        route("/large") {
            routeGet {
                val article = transaction {
                    Article.findById(LARGE_ARTICLE)
                }
                val sections = ArrayList<Section>()

                transaction {
                    article?.sections?.forEach { sections.add(it) }
                }

                call.respondTemplate("dynamic.ftl", mapOf("article" to article, "sections" to sections))
            }
        }
    }
}