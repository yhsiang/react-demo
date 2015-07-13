var Router = require("react-router")
var Index=require("/")

import Index from "./js/components"

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