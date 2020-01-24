require-from-base
_____________________________________________________________________________________________________________________________________________________________________
require-from-base is a small NPM package designed for getting the directory the node_modules folder resides in as well as a helper function, base_require, that will require(…) files relative to the directory where node_modules resides in. Just require(‘require-from-base’).base_require(…); and that can be assigned to a variable just as if require(…) was called with the specific path to the file.
Example:

Project Folder Structure is as follows:

Root\n
 node_modules\n
  require-from-base\n
   index.js\n
   LICENSE\n
   Readme.md\n
   .gitignore\n
   Package.json\n
 initialization\n
  init.js\n
  settings.json\n
 logging\n
  file-logger.js\n
 server.js\n
 package.json\n

In Root/initialization/init.js:

var baseRequire = require(‘require-from-base’).base_require;
var fileLogger = baseRequire(‘logging/file-logger.js’);
var fileLogger.log(‘log message here’);

In other words, regardless of which subfolder the process’s current directory is in, the above code allows the developer to simply retrieve a file by specifying a path relative to where the node_modules sits. (In this case, the project directory) index.js for require-from-base will get __dirname + ‘../../’ + the file name passed as parameter to base_require.
Have fun!
