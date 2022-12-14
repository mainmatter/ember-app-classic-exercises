import Controller from '@ember/controller';
import { computed } from "@ember/object";
import { inject as controller } from '@ember/controller';
import { readOnly } from '@ember/object/computed';

export default Controller.extend({
  rootController: controller("controller-injections-2"),

  dataOriginal: readOnly("rootController.data"), // Should be populated from parent route

  dataModified: computed('dataOriginal', function () {
    return this.get('dataOriginal') * 2;
  }),

});
