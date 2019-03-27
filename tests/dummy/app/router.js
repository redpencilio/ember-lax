import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('demo', function() {
    this.route('as-component');
    this.route('as-modifier');
  });
});

export default Router;
