import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      console.log("pre set: " + this.addNewQuestion);
      this.set('addNewQuestion', true);
      console.log("post set: " + this.addNewQuestion);
    },

    saveQuestion1() {
      var params = {
        query: this.get('query'),
        notes: this.get('notes'),
        author: this.get('author'),
        timestamp: this.get('timestamp'),
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion2', params);
    }
  }
});
