#!/usr/bin/env node

var execFile = require('child_process').execFile
var lib = require('./lib/print-lines')

var from = process.argv[2]
var to = process.argv[3]
var file = process.argv[4]

var sedArgs = lib( from, to, file )

execFile( 'sed', sedArgs, function( error, stdout, stderr ){
	if (error) {
		throw error
	}
	console.log(stdout)
})
