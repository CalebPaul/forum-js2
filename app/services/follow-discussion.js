import Ember from 'ember';

export default Ember.Service.extend({
  topics: [],

// add(topic) {
//   for (var i = 0; i < topics.length; i++) {
//     if (topics[i] === topic) {
//       alert('Already added!');
//     } else {
//       console.log('follow-service');//to track action received from tile.
//       this.get('topics').pushObject(topic);
//     }
//   }
// },

add(topic) {
  console.log('follow-service');//to track action received from tile.
  this.get('topics').pushObject(topic);
},

remove(topic) {
  this.get('topics').popObject(topic);
}
});
