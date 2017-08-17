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

var een = require("een");
var ensnme = require("ensnme");
var falzy = require("falzy");
var meton = require("meton");

var metod = function metod(entity) {
	/*;
                                    	@meta-configuration:
                                    		{
                                    			"entity:required": "*"
                                    		}
                                    	@end-meta-configuration
                                    */

	if (falzy(entity)) {
		return [];
	}

	try {
		return meton(entity).reduce(function (list, property) {
			var method = ensnme(entity[property]);

			if (!een(list, method)) {
				list.push(method);
			}

			return list;
		}, []);

	} catch (error) {
		return [];
	}
};

module.exports = metod;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldG9kLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiZWVuIiwicmVxdWlyZSIsImVuc25tZSIsImZhbHp5IiwibWV0b24iLCJtZXRvZCIsImVudGl0eSIsInJlZHVjZSIsImxpc3QiLCJwcm9wZXJ0eSIsIm1ldGhvZCIsInB1c2giLCJlcnJvciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJEQSxJQUFNQSxNQUFNQyxRQUFTLEtBQVQsQ0FBWjtBQUNBLElBQU1DLFNBQVNELFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUUsUUFBUUYsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNRyxRQUFRSCxRQUFTLE9BQVQsQ0FBZDs7QUFFQSxJQUFNSSxRQUFRLFNBQVNBLEtBQVQsQ0FBZ0JDLE1BQWhCLEVBQXdCO0FBQ3JDOzs7Ozs7OztBQVFBLEtBQUlILE1BQU9HLE1BQVAsQ0FBSixFQUFxQjtBQUNwQixTQUFPLEVBQVA7QUFDQTs7QUFFRCxLQUFHO0FBQ0YsU0FBT0YsTUFBT0UsTUFBUCxFQUFnQkMsTUFBaEIsQ0FBd0IsVUFBRUMsSUFBRixFQUFRQyxRQUFSLEVBQXNCO0FBQ3BELE9BQUlDLFNBQVNSLE9BQVFJLE9BQVFHLFFBQVIsQ0FBUixDQUFiOztBQUVBLE9BQUksQ0FBQ1QsSUFBS1EsSUFBTCxFQUFXRSxNQUFYLENBQUwsRUFBMEI7QUFDekJGLFNBQUtHLElBQUwsQ0FBV0QsTUFBWDtBQUNBOztBQUVELFVBQU9GLElBQVA7QUFDQSxHQVJNLEVBUUosRUFSSSxDQUFQOztBQVVBLEVBWEQsQ0FXQyxPQUFPSSxLQUFQLEVBQWM7QUFDZCxTQUFPLEVBQVA7QUFDQTtBQUNELENBM0JEOztBQTZCQUMsT0FBT0MsT0FBUCxHQUFpQlQsS0FBakIiLCJmaWxlIjoibWV0b2Quc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwibWV0b2RcIixcblx0XHRcdFwicGF0aFwiOiBcIm1ldG9kL21ldG9kLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJtZXRvZC5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJtZXRvZFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvbWV0b2QuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJtZXRvZC10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdEV4dHJhY3QgYSBsaXN0IG9mIG1ldGhvZHMuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImVlblwiOiBcImVlblwiLFxuXHRcdFx0XCJlbnNubWVcIjogXCJlbnNubWVcIixcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxuXHRcdFx0XCJtZXRvblwiOiBcIm1ldG9uXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgZWVuID0gcmVxdWlyZSggXCJlZW5cIiApO1xuY29uc3QgZW5zbm1lID0gcmVxdWlyZSggXCJlbnNubWVcIiApO1xuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcbmNvbnN0IG1ldG9uID0gcmVxdWlyZSggXCJtZXRvblwiICk7XG5cbmNvbnN0IG1ldG9kID0gZnVuY3Rpb24gbWV0b2QoIGVudGl0eSApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcImVudGl0eTpyZXF1aXJlZFwiOiBcIipcIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIGZhbHp5KCBlbnRpdHkgKSApe1xuXHRcdHJldHVybiBbIF07XG5cdH1cblxuXHR0cnl7XG5cdFx0cmV0dXJuIG1ldG9uKCBlbnRpdHkgKS5yZWR1Y2UoICggbGlzdCwgcHJvcGVydHkgKSA9PiB7XG5cdFx0XHRsZXQgbWV0aG9kID0gZW5zbm1lKCBlbnRpdHlbIHByb3BlcnR5IF0gKTtcblxuXHRcdFx0aWYoICFlZW4oIGxpc3QsIG1ldGhvZCApICl7XG5cdFx0XHRcdGxpc3QucHVzaCggbWV0aG9kICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBsaXN0O1xuXHRcdH0sIFsgXSApO1xuXG5cdH1jYXRjaCggZXJyb3IgKXtcblx0XHRyZXR1cm4gWyBdO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1ldG9kO1xuIl19
//# sourceMappingURL=metod.support.js.map
