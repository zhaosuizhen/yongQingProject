// echarts根据屏幕自适应

const changeSize = (myChart) => {
    // 绑定浏览器窗口大小被改变的事件
    // 改变echarts大小配置
    window.addEventListener('resize',() => {myChart.resize()})
  }

  export default changeSize