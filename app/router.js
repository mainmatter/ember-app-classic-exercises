import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('side-effects');
  this.route('lack-of-public-apis');
  this.route('overusing-the-component-helper');
  this.route('observers');
  this.route('god-objects');
  this.route('notify-property-change');
  this.route('string-actions');
  this.route('two-way-binding');
  this.route('setter-computed-properties');
  this.route('leaking-state');
  this.route('overriding-component-methods');
  this.route('controller-injections-1');

  this.route('controller-injections-2', function () {
    this.route('child-route');
  });

  this.route('controller-injections-3', function () {
    this.route('child-route');
  });

  this.route('controller-injections-4', function () {
    this.route('route-1');
    this.route('route-2');
  });

  this.route('property-syntax');

  this.route('render-syntax', function () {
    this.route('child-route');
  });

  this.route('flattening-array-with-cps');
  this.route('using-the-map-class');
});

export default Router;
