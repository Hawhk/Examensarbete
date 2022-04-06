package com.exwork

import io.ktor.routing.*
import io.ktor.http.*
import freemarker.cache.*
import io.ktor.freemarker.*
import io.ktor.application.*
import io.ktor.response.*
import io.ktor.request.*
import kotlin.test.*
import io.ktor.server.testing.*
import com.exwork.controller.*

class ApplicationTest {
    // @Test
    // fun testRoot() {
    //     withTestApplication({ configureTemplating() }) {
    //         handleRequest(HttpMethod.Get, "/").apply {
    //             assertEquals(HttpStatusCode.OK, response.status())
    //             assertEquals("Hello World!", response.content)
    //         }
    //     }
    // }
}