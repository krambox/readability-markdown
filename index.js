#!/usr/bin/env node
var fs = require('fs')
var argv = require('minimist')(process.argv.slice(2))
var read = require('node-read')
var TurndownService = require('turndown')
var turndownService = new TurndownService()

var data = fs.readFileSync(argv._[0])

read(data.toString(), function(err, article, res) {
  // Title
  console.log(article.title)

  // Main Article.
  //console.log(article.content)

  var markdown = turndownService.turndown(article.content)

  console.log(markdown)

  // HTML
  //console.log(article.html)

  // DOM
  //console.log(article.dom)
})
