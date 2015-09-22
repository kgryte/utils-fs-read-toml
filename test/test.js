/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	readJSON = require( './../lib' );


// VARIABLES //

var expect = chai.expect;


// TESTS //

describe( 'utils-fs-read-json', function tests() {

	it( 'should export a function', function test() {
		expect( readJSON ).to.be.a( 'function' );
	});

	it( 'should export a function to read an entire JSON file synchronously', function test() {
		expect( readJSON.sync ).to.be.a( 'function' );
	});

});
