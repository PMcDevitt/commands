'use strict'
//   Fixes Directory error first
// function Directory(){
// }
//
// module.exports = Directory

function Directory(){
 this.files = []
}

// Fixes the addFile issue
Directory.prototype.write = function(filename){
    this.files.push(filename)
}

// Fixes the issues for the second test
Directory.prototype.ls = function(){
    return this.files.sort()
}
module.exports = Directory
