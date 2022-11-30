import Controller from '@ember/controller';
import { computed } from "@ember/object";

export default Controller.extend({

  dataOriginal: null, // Should be populated from parent route

  dataModified: computed('dataOriginal', function () {
    return this.get('dataOriginal') * 2;
  }),

});
