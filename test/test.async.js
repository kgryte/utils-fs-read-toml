/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	path = require( 'path' ),
	data = require( './fixtures/data.json' ),
	read = require( './../lib/async.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'async', function tests() {

	var file = path.join( __dirname, 'fixtures', 'config.toml' ),
		bad = path.join( __dirname, 'fixtures', 'bad.toml' );

	it( 'should export a function', function test() {
		expect( read ).to.be.a( 'function' );
	});

	it( 'should read a TOML file', function test( done ) {
		read( file, onRead );
		function onRead( error, actual ) {
			if ( error ) {
				assert.ok( false );
			} else {
				assert.deepEqual( actual, data );
			}
			done();
		}
	});

	it( 'should read a TOML file if provided an encoding option', function test( done ) {
		read( file, 'utf8', onRead );
		function onRead( error, actual ) {
			if ( error ) {
				assert.ok( false );
			} else {
				assert.deepEqual( actual, data );
			}
			done();
		}
	});

	it( 'should read a TOML file if provided an options object', function test( done ) {
		read( file, {'encoding':'utf8'}, onRead );
		function onRead( error, actual ) {
			if ( error ) {
				assert.ok( false );
			} else {
				assert.deepEqual( actual, data );
			}
			done();
		}
	});

	it( 'should return an error', function test( done ) {
		read( 'beepboopbapbop', onRead );
		function onRead( error ) {
			if ( error ) {
				assert.ok( error );
				assert.strictEqual( error.code, 'ENOENT' );
			} else {
				assert.ok( false );
			}
			done();
		}
	});

	it( 'should return an error (encoding option)', function test( done ) {
		read( 'beepboopbapbop', 'utf8', onRead );
		function onRead( error ) {
			if ( error ) {
				assert.ok( error );
			} else {
				assert.ok( false );
			}
			done();
		}
	});

	it( 'should return an error (options object)', function test( done ) {
		read( 'beepboopbapbop', {'encoding':'utf8'}, onRead );
		function onRead( error ) {
			if ( error ) {
				assert.ok( error );
			} else {
				assert.ok( false );
			}
			done();
		}
	});

	it( 'should return an error if unable to parse file data as TOML', function test( done ) {
		read( bad, onRead );
		function onRead( error ) {
			if ( error ) {
				assert.ok( error );
			} else {
				assert.ok( false );
			}
			done();
		}
	});

});
