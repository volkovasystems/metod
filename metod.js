"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "metod",
			"path": "metod/metod.js",
			"file": "metod.js",
			"module": "metod",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/metod.git",
			"test": "metod-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Extract a list of methods.
	@end-module-documentation

	@include:
		{
			"een": "een",
			"ensnme": "ensnme",
			"falzy": "falzy",
			"meton": "meton"
		}
	@end-include
*/

const een = require( "een" );
const ensnme = require( "ensnme" );
const falzy = require( "falzy" );
const meton = require( "meton" );

const metod = function metod( entity ){
	/*;
		@meta-configuration:
			{
				"entity:required": "*"
			}
		@end-meta-configuration
	*/

	if( falzy( entity ) ){
		return [ ];
	}

	try{
		return meton( entity ).reduce( ( list, property ) => {
			let method = ensnme( entity[ property ] );

			if( !een( list, method ) ){
				list.push( method );
			}

			return list;
		}, [ ] );

	}catch( error ){
		return [ ];
	}
};

module.exports = metod;
