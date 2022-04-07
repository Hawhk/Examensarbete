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
import com.exwork.models.Article
import com.exwork.models.Articles
import com.exwork.models.Section
import com.exwork.models.Sections
import org.jetbrains.exposed.sql.Table.Dual.integer
import java.lang.reflect.TypeVariable
import kotlin.reflect.full.declaredMemberProperties

fun Route.dynamicPages() {
    route("/dynamic") {
        route("/small") {
            routeGet {
                val article = transaction {
                    Article.findById(1)
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
                    Article.findById(2)
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