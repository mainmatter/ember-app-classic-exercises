import Controller from '@ember/controller';
import { inject as service } from "@ember/service";

export default Controller.extend({
  myService: service("controller-injections-4"),

});