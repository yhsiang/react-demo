var React = require("react")
var {Router,Route} = require("react-router")
var Index = require("./components/Index.jsx")

var router =
    <Router history={history}>
        <Route path="/" component={Index}>
            <Route path="contacts" component={Contacts}/>
            <Route path="news" component={News}/>
            <Route path="products" component={Products}/>
            <Route path="services" component={Services}/>
        </Route>
    </Router>

module.exports = router