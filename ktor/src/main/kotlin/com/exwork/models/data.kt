package com.exwork.models


import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.jodatime.*
import org.jetbrains.exposed.dao.*
import org.jetbrains.exposed.dao.id.*

import io.ktor.application.*
import org.joda.time.DateTime

import java.util.*

object Articles : IntIdTable() {
    val header = varchar("header", 255)
    val subHeader = varchar("sub_header", 255)
    val description = varchar("description", 255)
    val datePosted = datetime("date_posted")
    val postedBy = varchar("posted_by", 128)
}

class Article(id: EntityID<Int>) : IntEntity(id) {
    companion object : IntEntityClass<Article>(Articles)
    var header by Articles.header
    var subHeader by Articles.subHeader
    var description by Articles.description
    var datePosted by Articles.datePosted
    var postedBy by Articles.postedBy
    val sections by Section referrersOn Sections.article
}

object Sections : IntIdTable() {
    val header = varchar("header", 255)
    val body = text("body")
    val article = reference("article_id", Articles)
}

class Section(id: EntityID<Int>) : IntEntity(id) {
    companion object : IntEntityClass<Section>(Sections)
    var header by Sections.header
    var body by Sections.body
    var article by Article referencedOn Sections.article
}