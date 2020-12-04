document.getElementById('aBtn').onclick = function () {
  //异步加载A
  import('./test-1/A').then((data) => {
    alert(data.A)
  })
}

document.getElementById('bBtn').onclick = function () {
  //异步加载b
  import('./test-1/B').then((data) => {
    alert(data.B)
  })
}