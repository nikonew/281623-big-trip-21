import {POINTS_COUNT} from '../const.js';
import {generateMockDestinations} from '../mock/destination.js';


export default class DestinationsModel {
  #destination = Array.from({length: POINTS_COUNT}, generateMockDestinations);

  get destination() {
    return this.#destination;
  }


  getById(id) {
    return this.#destination
      .find((destination) => destination.id === id);
  }
}
