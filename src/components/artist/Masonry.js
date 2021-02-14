import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

Masonry.propTypes = {
  breakpointCols: PropTypes.object,
  className: PropTypes.string,
  columnClassName: PropTypes.string,
  ref: PropTypes.object,
  child: PropTypes.object,
  children: PropTypes.node.isRequired
};

function Masonry ({ breakpointCols, className, columnClassName, ref, children }) {
  let properCols = 4;

  useEffect(() => {
    window.addEventListener('resize', getBreakPointCols());
    console.log(breakpointCols, children[0]);
    return (
      window.removeEventListener('resize', getBreakPointCols())
    );
  });

  return (
    <div className={className} ref={ref}>
      {[...Array(properCols)].map((n, idx) =>
        <div key={idx} className={columnClassName} style={{ width: `${100 / properCols}%` }}>
          {children[0]}
        </div>)}
    </div>
  );

  function getBreakPointCols () {
    properCols = breakpointCols.default;
    const width = window.innerWidth;
    const keys = Object.keys(breakpointCols);
    for (let idx = 0; idx < keys.length; idx++) {
      const key = keys[idx];
      if (key === 'default') continue;
      const value = breakpointCols[key];
      if (width >= key * 1) {
        properCols = value;
      }
    }
    console.log(width, properCols);
  }
};

export default Masonry;
