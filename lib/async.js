'use strict';

// MODULES //

var readFile = require( 'utils-fs-read-file' ),
	parse = require( 'utils-toml-parse' ),
	isString = require( 'validate.io-string-primitive' );


// READ ASYNC //

/**
* FUNCTION: read( path[, options,] clbk )
*	Reads the entire contents of a TOML file.
*
* @param {String} path - file path
* @param {Object|String} [options] - function options
* @param {Function} clbk - callback to invoke after attempting to read a file
* @returns {Void}
*/
function read( path, options, clbk ) {
	var done,
		opts;

	if ( arguments.length < 3 ) {
		opts = {};
		done = options;
	} else {
		if ( isString( options ) ) {
			opts = {};
		} else {
			opts = options;
		}
		done = clbk;
	}
	opts.encoding = 'utf8';
	readFile( path, opts, onRead );

	/**
	* FUNCTION: onRead( error, data )
	*	Callback invoked upon attempting to read a file.
	*
	* @private
	* @param {Error|Null} error - error object
	* @param {String} data - file data
	* @returns {Void}
	*/
	function onRead( error, data ) {
		if ( error ) {
			return done( error );
		}
		data = parse( data );
		if ( data instanceof Error ) {
			return done( data );
		}
		done( null, data );
	}
} // end FUNCTION read()


// EXPORTS //

module.exports = read;
