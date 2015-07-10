var Router = require('react-router')
var Route = Router.Route

var routes = (
    <Route handler={App}>
        <Route path="contacts" handler={Contacts}/>
        <Route path="news" handler={News}/>
        <Route path="products" handler={Products}/>
        <Route path="services" handler={Services}/>
    </Route>
)