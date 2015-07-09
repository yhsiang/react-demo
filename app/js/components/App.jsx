var React = require("react")

var App = React.createClass({
    render: function () {
        return (
            <div>
                <div class="body1">
                    <div class="body2">
                        <div class="main">
                            <header>
                                <div class="wrapper">
                                    <h1><a href="index.html" id="logo">Progress Business Company</a></h1>
                                    <nav>
                                        <ul id="menu">
                                            <li id="nav1" class="active"><a href="index.html">Home<span>Welcome!</span></a>
                                            </li>
                                            <li id="nav2"><a href="News.html">News<span>Fresh</span></a></li>
                                            <li id="nav3"><a href="Services.html">Services<span>for you</span></a></li>
                                            <li id="nav4"><a href="Products.html">Products<span>The best</span></a></li>
                                            <li id="nav5"><a href="Contacts.html">Contacts<span>Our Address</span></a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div class="wrapper">
                                    <div class="slider">
                                        <ul class="items">
                                            <li><img src="images/img1.jpg" alt=""/></li>
                                            <li><img src="images/img2.jpg" alt=""/></li>
                                            <li><img src="images/img3.jpg" alt=""/></li>
                                            <li><img src="images/img4.jpg" alt=""/></li>
                                        </ul>
                                    </div>
                                </div>
                            </header>
                            <div class="ic">More Website Templates at TemplateMonster.com!</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})

module.exports = App