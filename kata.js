let repeatNumbers = function(data) {
  let fullRepeat = "";
  for (const array of data) {
    let repeatThis = array[0].toString();
    if (data.length === 1) {
      return repeatThis.repeat(array[1]);
    } else {
      fullRepeat += repeatThis.repeat(array[1]) + ", ";
    }
  } return (fullRepeat.substr(0, fullRepeat.length - 2));
};


console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));