require-from-base
_____________________________________________________________________________________________________________________________________________________________________
require-from-base is a small NPM package designed for getting the directory the node_modules folder resides in as well as a helper function, base_require, that will require(…) files relative to the directory where node_modules resides in. Just require(‘require-from-base’).base_require(…); and that can be assigned to a variable just as if require(…) was called with the specific path to the file.
Example:

In Root/initialization/init.js:

var baseRequire = require(‘require-from-base’).base_require;
// logging/file-logger.js is relative to the project root
var fileLogger = baseRequire(‘logging/file-logger.js’);
var fileLogger.log(‘log message here’);

In other words, regardless of which subfolder the process’s current directory is in, the above code allows the developer to simply retrieve a file by specifying a path relative to where the node_modules sits. (In this case, the project directory) index.js for require-from-base will get __dirname + ‘../../’ + the file name passed as parameter to base_require.
Have fun!
