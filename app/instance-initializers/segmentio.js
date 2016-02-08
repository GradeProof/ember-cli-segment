import getOwner from 'ember-getowner-polyfill';
import config from '../config/environment';

export default {
  name: 'segment',
  initialize: function(applicationInstance) {
    var owner = getOwner(applicationInstance);
    var segment = owner.lookup('service:segment');

    segment.set('config', config);
  }
};
