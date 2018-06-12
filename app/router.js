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

  this.route('medication');
  this.route('firstaid');
  this.route('login');
  this.route('reg');
  this.route('phome');
  this.route('pprodoc');
  this.route('precords');
  this.route('pmedication');
  this.route('pfirstaid');
  this.route('lab');
  this.route('lhome');
  this.route('lprofile');
  this.route('ltest');
});

export default Router;
