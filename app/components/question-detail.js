import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(question) {
      if (confirm('Really delete question?')) {
        this.sendAction('destroyQuestion', question);
      }
    },
    destroyAnswer(answer) {
      this.sendAction('destroyAnswer', answer);
    }
  }
});
