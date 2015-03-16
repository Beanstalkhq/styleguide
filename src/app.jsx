var React = require('react');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;
var components = require('./components.js');
var Highlight = require('react-highlight');

var Sidebar = React.createClass({
  render: function () {
	    return (
				<div className="bss-flexible-sidenav +tall-top">
					<div className="bss-flexible-sidenav__menu">
					{components.map(function(component) {
						return <Link className="bss-flexible-sidenav__menu__item" activeClassName="+active" to="component" params={{title: component.title}}>
							<i className="fa fa-home bss-flexible-sidenav__menu__item__icon"></i>
							<span className="bss-flexible-sidenav__menu__item__title">{component.title}</span>
						</Link>;
					})}
					</div>
				</div>
			);
	  }
});

var App = React.createClass({
  mixins: [ Router.State ],

  render: function () {
	    var title = this.getParams().title;
	    return (
				<div>
					<div className="bss-topnav">
						<div className="bss-topnav__bar"></div>
						<div className="bss-topnav__content">
							<span className="bss-topnav__content__brand" href>
								<img src="logo.png" alt="Company Logo"/>
							</span>
							<ul className="bss-topnav__content__menu">
								<li><a href="#">Beanstalk Style Guide</a></li>
								<li><a ui-sref="calendar">Calendar</a></li>
							</ul>
							<ul className="bss-topnav__content__menu pull-right">
								<li className="bss-topnav__content__menu__form">
									<div client-search></div>
								</li>
								<li className="dropdown" dropdown on-toggle="toggled(open)">
									<a href className="dropdown-toggle padding-right-0" dropdown-toggle>
									 Mike Hewitt <b className="caret"></b>
									</a>
									<ul className="dropdown-menu" role="menu">
										<li><a href>My Profile</a></li>
										<li><a href>Team Members</a></li>
										<li><a href>Company Profile</a></li>

										<li className="divider"></li>
										<li><a href="https://beanstalk.reamaze.com" target="_blank">Help</a>
										</li>
										<li className="divider"></li>
										<li><a href="/signout">Sign out</a>
										</li>
									</ul>
								</li>
							</ul>
						</div>
						<div className="bss-topnav__secondary">
							<div className="bss-topnav__secondary__content" >
								<ul className="bss-topnav__secondary__content__menu padding-top-12">
									<li><a href>Mike Lewis</a></li>
									<li><a href>Calendar</a></li>
								</ul>
								<ul className="bss-topnav__secondary__content__menu pull-right">
									<li>
										<div className="bss-label-square +medium">
											<div className="center-vertical">AC</div>
										</div>
									</li>
									<li>
										<div className="bss-label-square +medium">
											<div className="center-vertical">DV</div>
										</div>
									</li>
									<li>
										<div className="bss-label-square +medium +active">
											<div className="center-vertical">KL</div>
										</div>
									</li>
									<li>
										<div className="bss-label-square__add">
											<div className="center-vertical">+</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<Sidebar/>
					<div className="bss-nav-content +tall-top">
						<RouteHandler/>
					</div>
				</div>
			);
	  }
});

var Component = React.createClass({
  mixins: [ Router.State ],

  render: function () {
	    var params = this.getParams();
	    var Component = components.filter(function(component) {
				return component.title === params.title;
			})[0].html;
	    return (
				<Component/>
			);
	  }
});

var Index = React.createClass({
  render: function () {
	    return (
				<div className="bss-nav-content">
					<p>Our Styleguide</p>
				</div>
			);
	  }
});

var routes = (
  <Route handler={App}>
    <DefaultRoute handler={Index}/>
    <Route name="component" path=":title" handler={Component} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('styleguide'));
});
