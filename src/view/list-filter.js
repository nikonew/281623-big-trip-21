import AbstractView from '../framework/view/abstract-view.js';

function createFilterItemTemplite(filter, isCheked){
  const {type,count} = filter;
  return (`<div class="trip-filters__filter">
  <input
  id="filter-${type}"
  class="trip-filters__filter-input  visually-hidden"
  type="radio"
  name="trip-filter"
  ${isCheked ? 'checked' : ''}
  ${count === 0 ? 'disabled' : ''}
  value="${type}">
  <label class="trip-filters__filter-label"
  for="filter-${type}">${type}</label>
  </div>
  `);
}
function createWayPointTemplite(FilterItems){
  const filterItemsTemplite = FilterItems
    .map((filter,index)=> createFilterItemTemplite(filter,index === 0)).join('');
  return(
    `<form class="trip-filters" action="#" method="get">
        ${filterItemsTemplite}
        <button class="visually-hidden" type="submit">Accept filter</button>
        </form>`
  );
}

export default class FilterView extends AbstractView {
  #filters = null;

  constructor({filters}){
    super();
    this.#filters = filters;
  }

  get template() {
    return createWayPointTemplite(this.#filters);
  }

}
