import Ember from 'ember';

export default Ember.Component.extend({
  followDiscussion: Ember.inject.service(),

  actions: {
    followThisDiscussion(topic) {
      console.log('q-tile');
      this.get('followDiscussion').add(topic);
    }
  }
});
