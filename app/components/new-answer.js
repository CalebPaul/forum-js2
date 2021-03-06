import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    saveAnswer() {
     var params = {
       response: this.get('response'),
       author: this.get('author'),
       timestamp: this.get('timestamp'),
       question: this.get('question')
     };
     this.set('addNewAnswer', false);
     this.sendAction('saveAnswer', params);
     this.set('response', "");
     this.set('author', "");
     this.set('timestamp', "");
   }
  }
});
