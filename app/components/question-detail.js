import Ember from 'ember';

export default Ember.Component.extend({

  byLine: Ember.computed('question.author', 'question.timestamp', function() {
    var author = ` - ${this.get('question.author')}`;
    var date = `${this.get('question.timestamp')}`;
    var output = ``+author+` on `+date+``;
    return output;
  }),

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
