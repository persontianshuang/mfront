/**
 * Created by user on 17/8/22.
 */


function deleteFromArray(arr, compare) {
  const index = arr.findIndex(compare)
  if (index > -1) {
    arr.splice(index, 1)
  }
}
export function oldsaveNxChoose(nx_change) {

  let NxChoose = storage.get(Nx_KEY, [])

  //   使用箭头语法来测试每个元素。在此示例中，没有任何元素返回 true，findIndex 返回 -1。
  // nx_change 不在 NxChoose 中
  if (NxChoose.findIndex(x => x == nx_change.nx) == -1) {
    if (nx_change.status) {
      NxChoose.push(nx_change.nx)
    }

  }
  // nx_change 在 NxChoose 中
  else {
    if (!nx_change.status) {
      for (var index = 0; index < NxChoose.length; index++) {
        if (nx_change.nx = NxChoose[index]) {
          // 删除起始下标为1，长度为1的一个值
          NxChoose.arr.splice(index, 1)
        }

      }

    }

  }

}
