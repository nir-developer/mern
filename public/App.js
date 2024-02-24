"use strict";

function App() {
  var continents = ['Asia', 'Europe', 'America', 'Australia', 'Africa'];
  var helloContinents = Array.from(continents, function (c) {
    return "Hello ".concat(c);
  });
  var message = helloContinents.join(' ');
  console.log(message);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, message), ";");
}
var container = document.getElementById('root');
var root = ReactDOM.createRoot(container);
root.render( /*#__PURE__*/React.createElement(App, null));