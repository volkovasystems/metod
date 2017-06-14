
const assert = require( "assert" );
const metod = require( "./metod.js" );

assert.equal( metod( Object.prototype ).length , 10, "should return 10" );

console.log( "ok" );
