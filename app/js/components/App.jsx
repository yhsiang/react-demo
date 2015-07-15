var React = require("react")

var App = React.createClass({
    render: function () {
        return (
            <div>
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
})

var Header = React.createClass({
    render: function () {
        return (
            <div className="body1">
                <div className="body2">
                    <div className="main">
                        <header>
                            <div className="wrapper">
                                <h1><a href="index.html" id="logo">Progress Business Company</a></h1>
                                <nav>
                                    <ul id="menu">
                                        <li id="nav1" className="active"><a href="index.html">Home<span>Welcome!</span></a>
                                        </li>
                                        <li id="nav2"><a href="News.html">News<span>Fresh</span></a></li>
                                        <li id="nav3"><a href="Services.html">Services<span>for you</span></a></li>
                                        <li id="nav4"><a href="Products.html">Products<span>The best</span></a></li>
                                        <li id="nav5"><a href="Contacts.html">Contacts<span>Our Address</span></a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="wrapper">
                                <div className="slider">
                                    <ul className="items">
                                        <li><img src={require("../../images/img1.jpg")} alt=""/></li>
                                        <li><img src={require("../../images/img2.jpg")} alt=""/></li>
                                        <li><img src={require("../../images/img3.jpg")} alt=""/></li>
                                        <li><img src={require("../../images/img4.jpg")} alt=""/></li>
                                    </ul>
                                </div>
                            </div>
                        </header>
                        <div className="ic">More Website Templates at TemplateMonster.com!</div>
                    </div>
                </div>
            </div>
        )
    }
})

var Footer = React.createClass({
    render: function () {
        return (
            <div className="main">
                <footer>
                    <a rel="nofollow" href="http://www.websitetemplate.com/" target="_blank">Website Template</a> by
                    html5css3.com<br/>
                    <a href="http://www.websitetemplate.com/" target="_blank">3D Models</a> provided byhtml5css3.com
                </footer>
            </div>
        )
    }
})

module.exports = App