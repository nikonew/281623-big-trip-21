import {points} from '../mock/points.js';

export default class PointsModel {
  #pointsModel = points;

  get points() {
    return this.#pointsModel;
  }
}


