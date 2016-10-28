import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(answer) {
      if (confirm('Really remove answer?')) {
        this.sendAction('destroyAnswer', answer);
      }
    }
  }
});
