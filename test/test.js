/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	read = require( './../lib' );


// VARIABLES //

var expect = chai.expect;


// TESTS //

describe( 'utils-fs-read-toml', function tests() {

	it( 'should export a function', function test() {
		expect( read ).to.be.a( 'function' );
	});

	it( 'should export a function to read an entire file synchronously', function test() {
		expect( read.sync ).to.be.a( 'function' );
	});

});
