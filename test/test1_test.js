'use strict'

var expect = require('chai').expect
var Directory = require('../test1')

describe('Given a File System', function() {
    describe('When called with a file name ', function() {
        it('Then an array is returned with the file names', function() {
            //First Error TypeError: Directory is not a function
            var directory = new Directory()
            directory.write('filename')
                // This will give an error like TypeError: directory.addFile is not a function
            expect(directory.files[0].FileName).to.eql('filename')
        })
    })
    describe('When ls is called', function() {
        it('Then an array is returned with the file names in order', function() {
            //First Error TypeError: Directory is not a function
            var directory = new Directory()
            directory.write('bfilename')
            directory.write('afilename')
            directory.write('cfilename')
                // This will give an error like TypeError: directory.addFile is not a function
            expect(directory.ls()).to.eql(['afilename', 'bfilename', 'cfilename'])
        })
    })
    describe('When finding a file in the directory', function(){
        var directory = new Directory()
        directory.write('bfilename', '123456')
        directory.write('afilename', '1234')
        directory.write('cfilename', '123456789')

        it('Then it should return the contents of the file', function(){
        expect(directory.find('afilename')).to.eql([{FileName: "afilename", Contents: '1234'}])
    })
})
    describe('When creating a file contents are added', function() {
        it('Then when the method is called it returns the files with the file data length', function() {
            //First Error TypeError: Directory is not a function
            var directory = new Directory()
            directory.write('bfilename', '123456')
            directory.write('afilename', '1234')
            directory.write('cfilename', '123456789')
                // This will give an error like TypeError: directory.addFile is not a function
            expect(directory.ls_a()).to.eql(['afilename - 4', 'bfilename - 6', 'cfilename - 9'])
        })
    })
    describe('When creating a file contents are added', function() {
        it('Then when the method is called it returns the files with the file data length', function() {
            //First Error TypeError: Directory is not a function
            var directory = new Directory()
            directory.write('bfilename', '123456')
            directory.write('afilename', '1234')
            directory.write('cfilename', '123456789')
            directory.rename('afilename', 'afilename2')

            expect(directory.find('afilename2')).to.eql([{FileName: "afilename2", Contents: '1234'}])
            expect(directory.find('afilename')).to.eql([])
        })
    })

})
