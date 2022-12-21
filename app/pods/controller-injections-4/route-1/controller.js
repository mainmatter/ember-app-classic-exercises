import Controller from '@ember/controller';
import service from '../service';

export default Controller.extend({
  myService: service('controller-injections-4'),
});
