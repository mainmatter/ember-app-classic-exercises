import Controller from '@ember/controller';
import { computed } from "@ember/object";
import { readOnly } from '@ember/object/computed';

export default Controller.extend({
  model: null,

  dataOriginal: readOnly('model'), // Should be populated from parent route

  dataModified: computed('dataOriginal', function () {
    return this.get('dataOriginal') * 2;
  }),

});
