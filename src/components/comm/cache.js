import storage from 'good-storage'


const Nx_KEY = '__nx__'
const History_KEY = '__history__'

const FAVORITE_KEY = '__favorite__'
const FAVORITE_MAX_LEN = 200



//学习状态记录
// export function saveHistory(sentence) {
//   let sentences = storage.get(History_KEY, [])
//   // let sentences = []
//   let data = {'id':sentence['_id'],'sentence':sentence['jp']}
//   sentences.unshift(data)
//   storage.set(History_KEY, sentences)
// }
//
// export function loadHistory() {
//   return storage.get(History_KEY, [])
// }

//历史
export function saveHistory(sentence) {
  let sentences = storage.get(History_KEY, [])
  // let sentences = []
  let data = {'id':sentence['_id'],'sentence':sentence['jp']}
  sentences.unshift(data)
  storage.set(History_KEY, sentences)
}

export function loadHistory() {
  return storage.get(History_KEY, [])
}

export function clearHistory() {
  return storage.set(History_KEY, [])
}


// N几词汇
export function saveNxChoose(nx_change) {
    let NxChoose = storage.set(Nx_KEY, nx_change)
}

var nx = [
    { 'status': false, 'Nx': 'N1' },
    { 'status': false, 'Nx': 'N2' },
    { 'status': true, 'Nx': 'N3' },
    { 'status': true, 'Nx': 'N4' },
    { 'status': true, 'Nx': 'N5' },
]


export function loadNxChoose() {
  // console.log(storage.get(Nx_KEY))
    return storage.get(Nx_KEY, nx)
}


// demo

function insertArray(arr, val, compare, maxLen) {
  const index = arr.findIndex(compare)
  if (index === 0) {
    return
  }
  if (index > 0) {
    arr.splice(index, 1)
  }
  arr.unshift(val)
  if (maxLen && arr.length > maxLen) {
    arr.pop()
  }
}

function deleteFromArray(arr, compare) {
  const index = arr.findIndex(compare)
  if (index > -1) {
    arr.splice(index, 1)
  }
}



