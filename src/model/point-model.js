import {destinations} from '../mock/destination.js';
import {points} from '../mock/points.js';

export default class PointsModel {
  #pointsModel = points;
  #destinationsModel = destinations;

  get points() {
    return this.#pointsModel;
  }

  get destinations () {
    return this.#destinationsModel;
  }

  getById(id) {
    return this.#destinationsModel
      .find((destination) => destination.id === id);
  }
}


