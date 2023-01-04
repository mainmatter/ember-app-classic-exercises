import Controller from '@ember/controller';
import { computed } from "@ember/object";

export default Controller.extend({
  firstName: 'Arnold',
  lastName: 'Schwarzenegger',

  fullName: computed('firstName', 'lastName', function () {
    const firstName = this.get('firstName');
    const lastName = this.get('lastName');

    return `${firstName} ${lastName}`;
  }),

  firstNameUppercase: computed('firstName', function () {
    const firstName = this.get('firstName');
    return firstName.toUpperCase();
  }),

  lastNameReverse: computed('lastName', function () {
    const lastName = this.get('lastName');
    return lastName.split('').reverse().join('');
  }),

  lastNameCharacterCounts: computed('lastName', function () {
    const lastName = this.get('lastName');
    return Object.entries(lastName
      .split('')
      .reduce((result, characterRaw) => {
        const character =
        characterRaw === " " ? "[space]" :
        characterRaw.toLowerCase();

        if (result[character] === undefined) {
          result[character] = 0;
        }

        result[character]++;

        return result;
      }, {})).sort((a, b) => a[0].localeCompare(b[0]));
  }),

  actions: {
    setValue(property, event) {
      this.set(property, event.target.value);
    },
  },
});
