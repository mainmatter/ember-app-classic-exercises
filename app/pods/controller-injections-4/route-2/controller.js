import Controller from '@ember/controller';
import { computed } from "@ember/object";
import { readOnly } from '@ember/object/computed';
import { inject as controller } from '@ember/controller';

export default Controller.extend({
  siblingController: controller('controller-injections-4.route-1'),

  dataOriginal: readOnly('siblingController.data'), // Should be populated from parent route

  dataModified: computed('dataOriginal', function () {
    return this.get('dataOriginal') * 2;
  }),

});
