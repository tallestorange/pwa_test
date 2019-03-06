const MarkdownIt = require('markdown-it')
const fs = require('fs')
const meta = require('markdown-it-meta')
const path = require('path')

const article_path = path.join(process.cwd(), '/articles')
const json_path = path.join(process.cwd(), '/json')

var headers = []
var algorithms = new Set()
var scores = new Set()
var orders = new Set()
var searchTag = {}

fs.readdir(article_path, function(err, files){
    if (err) throw err
    var fileList = files.filter(function(filename){
        const fullPath = path.join(article_path, filename)
        return fs.statSync(fullPath).isFile() && /.*\.md$/.test(fullPath)
    })
    fileList.forEach(function(filename){
        console.log("変換完了: " + filename)

        const fullPath = path.join(article_path, filename)
        const msg = fs.readFileSync(fullPath, 'utf-8')
        const md = new MarkdownIt()
        const jsonFileName = path.parse(filename).name + '.json'
        md.use(meta)

        const doc = md.render(msg)
        var metadata = md.meta
        var fulldata = {}
        fulldata['html'] = doc

        metadata['filename'] = jsonFileName
        if (metadata.competive_programming == true) {
            if (metadata.algorithms != undefined) {
                metadata.algorithms.forEach(function(algorithm){
                    algorithms.add(algorithm)
                })
            }
            scores.add(metadata.score)
            orders.add(metadata.order)
        }

        headers.push(metadata)        

        try {
            const target = path.join(json_path, jsonFileName)
            fs.writeFileSync(target,JSON.stringify(fulldata))
        }catch(e){
            console.log(e)
        }
    })

    const scoresArray = Array.from(scores).sort()
    const algorithmsArray = Array.from(algorithms).sort()
    const ordersArray = Array.from(orders)
    searchTag["scores"] = scoresArray
    searchTag["algorithms"] = algorithmsArray
    searchTag["orders"] = ordersArray

    try {
        const target = path.join(process.cwd(), 'articles.json')
        fs.writeFileSync(target,JSON.stringify(headers))
    }catch(e){
        console.log(e)
    }

    try {
        const target = path.join(process.cwd(), 'searchtag.json')
        fs.writeFileSync(target,JSON.stringify(searchTag))
    }catch(e){
        console.log(e)
    }
})


