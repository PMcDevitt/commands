'use strict'
//   Fixes Directory error first
// function Directory(){
// }
//
// module.exports = Directory

function Directory() {
    this.files = []
}

// Fixes the addFile issue
Directory.prototype.write = function(filename, contents) {
    var file = {}
    file.FileName = filename
    file.Contents = contents
    this.files.push(file)
}

Directory.prototype.ls = function() {
    return this.files.map(function(file) {
        return file.FileName
    }).sort()
}

Directory.prototype.find = function(fileName) {
    return this.files.filter(function(file) {
        return file.FileName === fileName ? file.Contents : ""
    })
}

Directory.prototype.rename = function(fileName, newFileName) {
    return this.files.map(function(file) {
        if(file.FileName === fileName){
            file.FileName = newFileName
        } 
        return file
    })
}

Directory.prototype.ls_a = function() {
    return this.files.map(function(file) {
        return file.FileName + " - " + file.Contents.length
    }).sort()
}


module.exports = Directory
