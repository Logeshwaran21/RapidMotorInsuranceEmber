import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('prodoc');
  this.route('hosrec');
  this.route('home');
  this.route('records');
  this.route('welcome');
});

export default Router;
