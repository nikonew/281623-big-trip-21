import AbstractView from '../framework/view/abstract-view.js';

function getSortItem({type, isChecked, isDisabled}) {
  return `
    <div class="trip-sort__item  trip-sort__item--${type}">
      <input
        id="sort-${type}"
        class="trip-sort__input visually-hidden"
        type="radio"
        name="trip-sort"
        value="sort-${type}"
        ${(isChecked) ? 'сhecked' : null}
        ${(isDisabled) ? 'disabled' : null}
        data-sort-type="${type}">
      <label
        class="trip-sort__btn"
        for="sort-${type}">${type}</label>
    </div>
  `;
}

function createSortTemplate(sortItems) {
  return (
    `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      ${sortItems.map((sortItem) => getSortItem(sortItem)).join('')}
    </form>`
  );
}

export default class SortView extends AbstractView {
  #handleSortTypeChange = null;
  #items = null;

  constructor({items, onSortTypeChange}) {
    super();
    this.#handleSortTypeChange = onSortTypeChange;
    this.#items = items;
    this.element.addEventListener('click', this.#sortTypeChangeHandler);
  }

  get template() {
    return createSortTemplate(this.#items);
  }

  #sortTypeChangeHandler = (evt) => {
    if (evt.target.tagName !== 'INPUT') {
      return;
    }
    evt.preventDefault();
    this.#handleSortTypeChange(evt.target.dataset.sortType);
  };
}

