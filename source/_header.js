define([
	'dojo/_base/lang',
	'dojo/has'
], function (lang, has) {
	var dontEnums = [
			'toString',
			'toLocaleString',
			'valueOf',
			'hasOwnProperty',
			'isPrototypeOf',
			'propertyIsEnumerable',
			'constructor'
		],
		dontEnumsLength = dontEnums.length,
		getObjectKeys = Object.keys || function (object) {
			var keys = [];
			for (var name in object) {
				if (object.hasOwnProperty(name)) {
					keys.push(name);
				}
			}

			if (has('bug-for-in-skips-shadowed')) {
				for (var i = 0, ii = dontEnumsLength; i < ii; i++) {
					var dontEnum = dontEnums[i];
					if (object.hasOwnProperty(dontEnum)) {
						keys.push(dontEnum);
					}
				}
			}
			return keys;
		},
		toString = {}.toString,
		isArray = function (obj) {
			return toString.call(obj) === '[object Array]';
		};
