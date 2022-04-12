package com.exwork.models


import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.dao.*
import org.jetbrains.exposed.dao.id.*


object Sections : IntIdTable() {
    val header = varchar("header", 255)
    val body = text("body")
    val picUrl = varchar("picture_url", 128).nullable()
    val article = reference("article_id", Articles)
}

class Section(id: EntityID<Int>) : IntEntity(id) {
    companion object : IntEntityClass<Section>(Sections)
    var header by Sections.header
    var body by Sections.body
    var picUrl by Sections.picUrl
    var article by Article referencedOn Sections.article
}