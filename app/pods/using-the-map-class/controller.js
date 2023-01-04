import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { readOnly } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Controller.extend({
  store: service(),

  model: null, // Populated from route
  owners: readOnly('model'),

  ownersByName: computed('owners.@each.name', function () {
    return this.get('owners').reduce((map, owner) => {
      map.set(owner.name, owner);
      return map;
    }, new Map());
  }),

  actions: {
    findBob() {
      const bob =
        this.get('ownersByName').get('Bob');

      alert(`
        Owner ${bob.name}
        has ${bob.pets.length} pets:
        ${bob.pets.mapBy('name').join(', ')}.
      `);
    },
  },
});
