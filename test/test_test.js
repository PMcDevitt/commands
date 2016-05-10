'use strict'

var expect = require('chai').expect
var Directory = require('../test')

xdescribe('Given a File System', function(){
    describe('When called with a file name ', function(){
        it('Then an array is returned with the file names', function(){
            //First Error TypeError: Directory is not a function
            var directory = new Directory()
            directory.write('filename')
            // This will give an error like TypeError: directory.addFile is not a function
            expect(directory.files).to.eql(['filename'])
        })
    describe('When ls is called', function(){
            it('Then an array is returned with the file names in order', function(){
            //First Error TypeError: Directory is not a function
            var directory = new Directory()
            directory.write('bfilename')
            directory.write('afilename')
            directory.write('cfilename')
            // This will give an error like TypeError: directory.addFile is not a function
            expect(directory.ls()).to.eql(['afilename', 'bfilename','cfilename'])
        })
        })
    })
})
