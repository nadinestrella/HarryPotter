import React from 'react';
import '../../scss/layout/Filter.scss';

function FilterByHouse({ handleFilterHouse, filterHouse }) {
  return (
    <div className="filtersContainer__byHouse">
      <label htmlFor="house" className="filtersContainer__byHouse--label">
        By House
      </label>
      <select
        value={filterHouse}
        id="house"
        onChange={(ev) => handleFilterHouse(ev.target.value)}
        className="filtersContainer__byHouse--select"
      >
        <option value="Gryffindor">Gryffindor</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="">Other</option>
      </select>
    </div>
  );
}

export default FilterByHouse;
