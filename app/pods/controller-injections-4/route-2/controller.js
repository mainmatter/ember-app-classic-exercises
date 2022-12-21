import Controller from '@ember/controller';
import { computed } from "@ember/object";
import { readOnly } from '@ember/object/computed';
import { inject as service } from "@ember/service";

export default Controller.extend({
  myService: service("controller-injections-4"),

  dataOriginal: readOnly('myService.data'), // Should be populated from parent route

  dataModified: computed('dataOriginal', function () {
    return this.get('dataOriginal') * 2;
  }), 

});
