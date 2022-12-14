import Controller from "@ember/controller";
import { computed } from "@ember/object";

export default Controller.extend({
  data: computed(function () {
    return Math.random();
  }),
});
