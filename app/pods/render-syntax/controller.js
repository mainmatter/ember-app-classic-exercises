import Controller from '@ember/controller';
import { readOnly } from "@ember/object/computed";

export default Controller.extend({

  model: null, // Populated by the route
  data: readOnly('model'),

});
