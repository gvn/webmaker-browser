var React = require('react');
var Router = require('react-router');

var Splash = require('./pages/splash/splash.jsx');
var Thumbnail = require('./pages/thumbnail/thumbnail.jsx');

var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;

/**
 * Create base class
 */
var App = React.createClass({
  render: function () {
    return <RouteHandler />;
  }
});

/**
 * Define routes
 */
var Routes = (
  <Route path="/" handler={App}>
    <Route path="/thumbnail" handler={Thumbnail} />
    <NotFoundRoute handler={Splash} />
    <DefaultRoute handler={Splash} />
  </Route>
);

/**
 * Start router
 */
Router.run(Routes, Router.HashLocation, (Root) => {
  React.render(<Root />, document.body);
});
