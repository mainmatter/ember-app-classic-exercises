import Controller from "@ember/controller";
import { readOnly } from "@ember/object/computed";

export default Controller.extend({
  _number: readOnly("number"),
  number: Math.random(),

  actions: {
    randomize() {
      this.set("number", Math.random());
    },
  },
});
