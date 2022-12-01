import Service from '@ember/service';
import { computed } from "@ember/object";

// This service is available as: 'controller-injections-4'

export default Service.extend({

  data: computed(function () {
    return Math.random();
  }),

})
