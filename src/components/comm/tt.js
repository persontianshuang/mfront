function permutations(array, r) {
  // Algorythm copied from Python `itertools.permutations`.
  var n = array.length;
  if (r === undefined) {
    r = n;
  }
  if (r > n) {
    return;
  }
  var indices = [];
  for (var i = 0; i < n; i++) {
    indices.push(i);
  }
  var cycles = [];
  for (var i = n; i > n - r; i-- ) {
    cycles.push(i);
  }
  var results = [];
  var res = [];
  for (var k = 0; k < r; k++) {
    res.push(array[indices[k]]);
  }
  results.push(res);

  var broken = false;
  while (n > 0) {
    for (var i = r - 1; i >= 0; i--) {
      cycles[i]--;
      if (cycles[i] === 0) {
        indices = indices.slice(0, i).concat(
          indices.slice(i+1).concat(
            indices.slice(i, i+1)));
        cycles[i] = n - i;
        broken = false;
      } else {
        var j = cycles[i];
        var x = indices[i];
        indices[i] = indices[n - j];
        indices[n - j] = x;
        var res = [];
        for (var k = 0; k < r; k++) {
          res.push(array[indices[k]]);
        }
        results.push(res);
        broken = true;
        break;
      }
    }
    if (broken === false) {
      break;
    }
  }
  return results;
}


function cartesianProductOf() {
  return Array.prototype.reduce.call(arguments,function(a, b) {
    var ret = [];
    a.forEach(function(a) {
      b.forEach(function(b) {
        ret.push(a.concat([b]));
      });
    });
    return ret;
  }, [[]]);
}


function range(start, stop, step) {
  if (typeof stop == 'undefined') {
    // one param defined
    stop = start;
    start = 0;
  }

  if (typeof step == 'undefined') {
    step = 1;
  }

  if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
    return [];
  }

  var result = [];
  for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
    result.push(i);
  }

  return result;
};





function me(choose,target){
  var l2 = permutations(range(choose), target);

  var l3 = l2.filter(function(x){
    var after = x.slice(0).sort()
    // console.log(after)
    if (after.toString()==x.toString()){
      return x
    }
  })
  return l3
}


// console.log(me(4,2).length);

var x0 = [1,2]
var x1 = [1,2,3]
var x2 = [2,3]
var x3 = [1,3]
var x4 = [1,3]

var all = [x0,x1,x2,x3,x4]


var haa = [];

var final = me(all.length,5)


for (var i = 0; i < final.length; i++) {
  function i_to_all(x) {
    return all[x]
  }

  var fi = final[i].map(i_to_all)
  // console.log(fi)
  // console.log(final[i]);

  function add_set(y) {
    if (!(y in haa)) {
      haa.push(y)

      // console.log(haa)
    }
  }
  console.log(cartesianProductOf(...fi))
  cartesianProductOf(...fi).map(add_set)
}


console.log(haa.length)
// cartesianProductOf(['1','3'],['a','b'])


// function sort_map(list) {
//   return list.sort()
// }
// console.log([[ 1, 7,3, 5 ],[1,3,5,6,9]].map(sort_map))


