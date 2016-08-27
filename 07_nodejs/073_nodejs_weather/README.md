```
npm install -g nodemon
```

https://github.com/mzabriskie/axios

http://stackoverflow.com/questions/30773756/is-it-okay-to-use-babel-node-in-production

http://babeljs.io/docs/plugins/#presets

https://swapi.co/

https://pokeapi.co/

https://www.topcoder.com/blog/start-writing-es6-javascript-in-your-node-js-apps-today/

https://babeljs.io/docs/usage/cli/

http://www.zsoltnagy.eu/using-es6-modules-with-webpack/

https://github.com/babel/babel-loader

http://stackoverflow.com/questions/5869216/how-to-store-node-js-deployment-settings-configuration-files

https://www.npmjs.com/package/config

https://github.com/indexzero/nconf

http://www.citymayors.com/statistics/largest-cities-population-125.html

http://www.citymayors.com/features/capitals.html

http://bulk.openweathermap.org/sample/

http://openweathermap.org/current

Examples of API calls:

standard api.openweathermap.org/data/2.5/find?q=London

metric api.openweathermap.org/data/2.5/find?q=London&units=metric

imperial api.openweathermap.org/data/2.5/find?q=London&units=imperial

http://api.openweathermap.org/data/2.5/forecast/daily?id=524901&lang=zh_cn

http://openweathermap.org/forecast5

https://erikflowers.github.io/weather-icons/

http://autocomplete-js.com/

https://github.com/autocompletejs/autocomplete.js

https://twitter.github.io/typeahead.js/

https://twitter.github.io/typeahead.js/examples/

http://blog.goguardian.com/nerds/chrome-extensions-in-react

https://www.codementor.io/reactjs/tutorial/building-a-chrome-extension-reactjs-broccoli-sass

https://react.rocks/tag/Chrome_Extension

http://michelletilley.net/2014/02/24/creating-chrome-extensions-with-react.html

https://www.npmjs.com/package/react-chrome-extension-boilerplate

http://stackoverflow.com/questions/25121144/alternating-row-colors-in-bootstrap-3-no-table

```
/*
Since you are using bootstrap and you want alternating row colors for every screen sizes you need to write separate style rules for all the screen sizes.
*/

/* For small screen */
.row :nth-child(even){
  background-color: #dcdcdc;
}
.row :nth-child(odd){
  background-color: #aaaaaa;
}

/* For medium screen */    
@media (min-width: 768px) {
    .row :nth-child(4n), .row :nth-child(4n-1) {
        background: #dcdcdc;
    }
    .row :nth-child(4n-2), .row :nth-child(4n-3) {
        background: #aaaaaa;
    }
}

/* For large screen */
@media (min-width: 992px) {
    .row :nth-child(6n), .row :nth-child(6n-1), .row :nth-child(6n-2) {
        background: #dcdcdc;
    }
    .row :nth-child(6n-3), .row :nth-child(6n-4), .row :nth-child(6n-5) {
        background: #aaaaaa;
    }
}
```
