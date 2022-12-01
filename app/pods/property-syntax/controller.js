import Controller from '@ember/controller';

export default Controller.extend({
  foo: 2,

  bar: function() {
    return this.get('foo') * Math.random();
  }.property('foo'),
})

// https://github.com/mainmatter/ember2-x-codemods
