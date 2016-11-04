import Ember from 'ember';

export function unanswered(params/*, hash*/) {
  var question = params[0];

  if (question.get('answers').get('length') > 0) {
    return Ember.String.htmlSafe('<span class="q-tile-envelope glyphicon glyphicon-envelope"></span>');
  }
}

export default Ember.Helper.helper(unanswered);
