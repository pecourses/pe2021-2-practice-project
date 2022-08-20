import React from 'react';

function FilterBadgesList ({ creatorFilter, changePredicate, badgesDataList }) {
  const mapBadges = (b, i) => (
    <li key={b.filterName}>
      {creatorFilter[b.filterName] && (
        <span>
          {b.badgeName}
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

  return <ul>{badgesDataList.map(mapBadges)}</ul>;
}

export default FilterBadgesList;
