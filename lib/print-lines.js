module.exports = function generateCommand( from, to, file ){
	if ( typeof file === 'undefined' && typeof to === 'string' ){
		file = to
		to = from
	}

	from = parseInt( from, 10 )
	to = parseInt( to, 10 )

	if ( from === to ){
		return [ '-n', from + 'p', file ]
	}

	if ( from > to ){
		throw new Error('Invalid arguments: print-lines {from} {to} {file} or print-lines {line} {file}')
	}

	return [ '-n', from + ',' + to + 'p', file ]
}
