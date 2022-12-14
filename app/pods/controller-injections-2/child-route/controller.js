import Controller from '@ember/controller';
import { inject as controller } from '@ember/controller';
import { computed } from "@ember/object";

export default Controller.extend({
  parentController: controller('controller-injections-2'),

  dataOriginal: computed.alias("parentController.data"), // Should be populated from parent route

  dataModified: computed('dataOriginal', function () {
    return this.get('dataOriginal') * 2;
  }),

});
