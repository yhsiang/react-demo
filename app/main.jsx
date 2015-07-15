var React = require("react")
require("./js/jquery-1.6.js")
//require("./js/cufon-replace.js")
//require("./js/cufon-yui.js")
require("./js/html5.js")
require("./js/jcarousellite.js")
require("./js/jquery.easing.1.3.js")
//require("./js/script.js")
//require("./js/Swis721_Cn_BT_400.font.js")
//require("./js/Swis721_Cn_BT_700.font.js")
//require("./js/tabs.js")
//require("./js/tms-0.3.js")
//require("./js/tms_presets.js")
require("./css/layout.css")
require("./css/reset.css")
require("./css/style.css")

var routes = require("./js/Router.jsx")
var Router = require("react-router")
Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root />, document.getElementById("container"));
});
