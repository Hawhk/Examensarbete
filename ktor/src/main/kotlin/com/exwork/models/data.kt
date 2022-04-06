package com.exwork.models

import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.dao.*
import org.jetbrains.exposed.dao.id.*

import io.ktor.application.*

object Articles : IntIdTable() {
    val header = varchar("header", 255)
    val description = varchar("description", 255)
}

class Article(id: EntityID<Int>) : IntEntity(id) {
    companion object : IntEntityClass<Article>(Articles)
    var header by Articles.header
    var description by Articles.description
}

object Sections : IntIdTable() {
    val header = varchar("header", 255)
    var body = text("body")
    val article = reference("article", Articles)
}

class Section(id: EntityID<Int>) : IntEntity(id) {
    companion object : IntEntityClass<Section>(Sections)
    var header by Sections.header
    var body by Sections.body
    var article by Article referencedOn Sections.article
}

fun Application.tables() {
    SchemaUtils.createMissingTablesAndColumns(Articles, Sections)

    val article1 = Article.new {
        header = "Hampus Hurtig"
        description = "En fin beskrivning om mig"
    }

    val section = Section.new { 
        header = "wow!"
        body = "Body man!"
        article = article1
    }
}
