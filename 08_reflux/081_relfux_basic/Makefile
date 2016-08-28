.PHONY: server client build run

server:
	babel src/server --watch src/server -o server.js

client:
	watchify src/client/main.jsx -v -t [ babelify --presets [ es2015 react ] ] -o public/js/main.js

build:
	NODE_ENV=production webpack --progress -p && babel --minified src/server -o server.js

run: server.js
	nodemon --verbose server.js
