run:
	nodemon --verbose server.js

server:
	babel src/server --watch src/server -o server.js

client:
	watchify src/client/main.jsx -v -t [ babelify --presets [ es2015 react ] ] -o public/js/main.js

build:
	webpack -p && babel src/server -o server.js
