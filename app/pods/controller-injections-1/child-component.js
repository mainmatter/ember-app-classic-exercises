import Component from "@ember/component";
import hbs from "htmlbars-inline-precompile";
import { computed } from "@ember/object";

export default Component.extend({
  // Component's tempalte is defined here to make exercise navigation easier.
  // This approach is OK for Ember integration tests, but don't use it in real life.
  layout: hbs`
    <h2>Child component</h2>

    <p>
      Child data original: {{this.dataOriginal}}
    </p>

    <p>
      Child data modified: {{this.dataModified}}
    </p>
    <p>a: {{a}}, b: {{b}}</p>
  `,

  dataOriginal: null, // Argument, number
  a: null, //arg,
  b: null, //arg
  dataModified: computed("dataOriginal", function () {
    return this.get("dataOriginal") * 2;
  }),
});
