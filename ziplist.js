// E27 zipList Mirabela Medallon

function zipList(one, two) {
  const result = [];
  for (let i = 0; i < one.length; i++) {
    result.push(one[i]);
    result.push(two[i]);
  }
  return result;
}

function zipListTheSimpleWay(one, two) {
  const result = new Array(one.length + two.length);
  _.each(one, function (element, index, list) { result[index * 2] = element; return list; });
  _.each(two, function (element, index, list) { result[(index * 2) + 1] = element; return list; });
  return result;
}

const list1 = [1, 2, 3];
const list2 = ['a', 'b', 'c'];

console.log(zipList(list1, list2));
console.log(zipListTheSimpleWay(list1, list2));
