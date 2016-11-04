import Ember from 'ember';

export default Ember.Service.extend({
  topics: [],

add(topic) {
  console.log('follow-service');
  this.get('topics').pushObject(topic);
},

remove(topic) {
  this.get('topics').popObject(topic);
}
});
