import { assign } from 'lodash';
import Dispatcher from '../core/Dispatcher';
import { EventEmitter } from 'events';

let _modelYear = null;
let _model = {};

let VehicleStore = assign({}, EventEmitter.prototype, {
  emitChange() {
    this.emit('change');
  },

  addChangeListener(callback) {
    this.on('change', callback);
  },

  removeChangeListener(callback) {
    this.removeListener('change', callback);
  },
});

export default VehicleStore;

Dispatcher.register((payload) => {
  
});
