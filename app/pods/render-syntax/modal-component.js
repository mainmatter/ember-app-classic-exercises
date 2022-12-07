import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';
import { computed } from '@ember/object';

export default Component.extend({
  // Component's tempalte is defined here to make exercise navigation easier.
  // This approach is OK for Ember integration tests, but don't use it in real life.
  layout: hbs`
      <a
        style="
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 30%);
        "
        href="#"
        {{action this.closeModal}}
      >
      </a>

      <div
        style="
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: white;
          padding: 2em;
          border: 1px solid black;
          border-radius: 1em;
        "
      >
        The modal

        <button
          {{action this.closeModal}}
        >×</button>
      </div>
  `,

  closeModal: null, // Argument, action

  modalContainerElement: computed(function () {
    return document.getElementById('modal-container');
  }),
});
