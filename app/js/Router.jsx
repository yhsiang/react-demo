var React = require("react")
var {Router,Route} = require("react-router")
var history = require("react-router/lib/History")
var App = require("./components/App.jsx")
var Index = require("./components/Index.jsx")
var Contacts = require("./components/Contacts.jsx")
var News = require("./components/News.jsx")
var Products = require("./components/Products.jsx")
var Services = require("./components/Services.jsx")

var router =
    <Route handler={App} path="/">
      <Route path="/contacts" handler={Contacts}/>
      <Route path="/news" handler={News}/>
      <Route path="/products" handler={Products}/>
      <Route path="/services" handler={Services}/>
    </Route>

module.exports = router