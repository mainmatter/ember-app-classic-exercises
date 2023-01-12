import Controller from '@ember/controller';
import { computed } from "@ember/object";
import { readOnly } from '@ember/object/computed';

export default Controller.extend({
  firstName: 'John',
  lastName: 'Doe',
  age: 40,

  model: null, // Populated from the route
  post: readOnly('model'),

  fullName: computed('age', function () {
   return `${this.get('firstName')} ${this.get('lastName')}`;
  }),

  postTitleCapitalized: computed(function () {
    return this.get('post.title').toUpperCase();
  }),

  actions: {
    setFirstName(event) {
      this.set('firstName', event.target.value);
    },
    setLastName(event) {
      this.set('lastName', event.target.value);
    },
    setAge(event) {
      this.set('age', parseInt(event.target.value, 10));
    },
    setPostTitle(event) {
      this.set('post.title', event.target.value);
    }
  },
});
