import Controller from "@ember/controller";
import { computed } from "@ember/object";
import { readOnly } from "@ember/object/computed";
import { inject as service } from "@ember/service";

export default Controller.extend({
  store: service(),

  model: null, // Populated from route
  owners: readOnly("model"),


  allPetsArrays: computed("owners.@each.pets", function () {
    return this.get("owners").mapBy("pets");
  }),

  allPets: computed("allPetsArrays.@each.[]", function () {
    return this.get("allPetsArrays").flat().sortBy("name");
  }),

  actions: {
    addPet() {
      this.get("owners.firstObject.pets").addObject({
        name: "New pet",
      });
    },
  },
});
