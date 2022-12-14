import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';
import { computed } from '@ember/object';

export default Component.extend({
  // Component's tempalte is defined here to make exercise navigation easier.
  // This approach is OK for Ember integration tests, but don't use it in real life.
  layout: hbs`
    <h2>Parent component</h2>

    <p>
      Parent data: {{this.data}}
    </p>

    {{yield data}}
  `,

  data: computed(function() {
    return Math.random();
  }),
});
