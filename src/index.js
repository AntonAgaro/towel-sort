
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix) {
  return matrix.reduce((newArr, item, index) => {
    item = item.sort((a,b) => {return a - b});
    return newArr.concat(!(index % 2) ? item : item.reverse())
}, []) 
  } else return [];
}
