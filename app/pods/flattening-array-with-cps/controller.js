import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { readOnly } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Controller.extend({
  store: service(),

  model: null, // Populated from route
  owners: readOnly('model'),

  allPetsOwner: computed('owners', function() { 
    return this.get('owners')
    .map(({pets}) => pets)
  }),

  allPets: computed('allPetsOwner.@each.[]', function () {
    return this.get('allPetsOwner')
      .flat()
      .sortBy('name');
  }),


  actions: {
    addPet() {
      this.get('owners.firstObject.pets').addObject({
        name: 'New pet',
      });
    },
  },
});
