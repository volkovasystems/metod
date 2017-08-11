
const assert = require( "assert" );
const metod = require( "./metod.js" );

assert.equal( metod( Object.prototype ).length , 10, "should be equal to 10" );

console.log( "ok" );
