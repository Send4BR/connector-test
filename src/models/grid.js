/**
 * Grid object model
 * @param {object} props
 * @constructor
 */
function Grid(props) {
  Object.keys(props).forEach((variationType) => {
    this[variationType] = props[variationType];
  });
}

module.exports = Grid;
