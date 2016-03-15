var expect = require('expect')
var lib = require('./lib/print-lines')

expect(
	lib( 5, 10, 'foo' )
).toEqual(
	[ '-n', '5,10p', 'foo' ]
)

expect(
	lib( 50, 100, 'bar' )
).toEqual(
	[ '-n', '50,100p', 'bar' ]
)

expect(
	lib( 5, 'bar' )
).toEqual(
	[ '-n', '5p', 'bar' ]
)

expect(
	lib
).withArgs( 10, 5, 'bar' ).toThrow(
	/Invalid/
)

console.log('all tests pass');
