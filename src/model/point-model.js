import {mockDestinations} from '../mock/task.js';

export default class PointsModel {
  constructor() {
    //this.points = points;
    this.destinations = mockDestinations;
    //this.offers = offers;
  }

  // getPoints() {
  //   return this.points;
  // }

  getDestinations() {
    return this.destinations;
  }

  // getOffers() {
  //   return this.offers;
  // }
}
