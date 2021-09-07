import {copyFile,readdir,readFile } from 'fs'

readdir('./books', (err, files)=>{
    if (err) return "yeah"
    let htmlWithZones = files.filter(file=>file.match(/content/i))
    let html = htmlWithZones.filter(file=>!file.match(/(Zone)/i))
    html.forEach(file=>{
        let origin = `./books/${file}`
        readFile(origin,'utf-8', (err,data)=>{
            if(err) return "YEAH"
    let found = data.match(/id\=\"c(?<chapter>\d+)\-\w+\-\d+\"/m)
            
            if (found){
                let {chapter} = found.groups
                copyFile(origin,`./books/finished/chapter_${chapter}.html`,(err)=>{
                    if (err) console.log("error");
                })
    console.log(chapter)            


}
        })
    })
})