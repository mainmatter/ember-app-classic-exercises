import { computed } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
  foo: 2,

  bar: computed('foo', function() {
    return this.get('foo') * Math.random();
  }),
})

// https://github.com/mainmatter/ember2-x-codemods
