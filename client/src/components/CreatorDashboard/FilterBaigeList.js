import React from 'react';

function FilterBaigeList ({ creatorFilter, changePredicate, baigesDataList }) {
  const mapBaiges = (b, i) => (
    <li key={b.filterName}>
      {creatorFilter[b.filterName] && (
        <span>
          {b.baigeName}
          <button
            onClick={() => {
              changePredicate({
                name: b.filterName,
                value: b.defaultValue,
              });
            }}
          >
            X
          </button>
        </span>
      )}
    </li>
  );

  return <ul>{baigesDataList.map(mapBaiges)}</ul>;
}

export default FilterBaigeList;
