import Ember from 'ember';
import ENV from 'screwdriver-ui/config/environment';

export default Ember.Component.extend({
  uiHostname: ENV.APP.SDUI_HOSTNAME,

  actions: {
    invalidateSession() {
      this.get('onInvalidate')();
    }
  }
});
