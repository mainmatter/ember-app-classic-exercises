import Component from "@ember/component";
import hbs from "htmlbars-inline-precompile";

export default Component.extend({
  // Component's tempalte is defined here to make exercise navigation easier.
  // This approach is OK for Ember integration tests, but don't use it in real life.
  layout: hbs`
    <div>
      <p>{{this.number}}</p>
      <button
        {{action this.randomize}}
      >
        Randomize
      </button>
    </div>
  `,

  number: null, //arg
  randomize: null,
});
