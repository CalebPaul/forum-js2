import Ember from 'ember';

export default Ember.Component.extend({
  followDiscussion: Ember.inject.service(),

  actions: {
    followThisDiscussion(topic) {
      console.log('q-tile'); //to track action passing to service.
      this.get('followDiscussion').add(topic);
    }
  }
});
