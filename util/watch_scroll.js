var scrollFunc = function (e) {
    var direct = 0;
    e = e || window.event;
    console.log(e)
    if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件             
        if (e.wheelDelta > 0) { //当滑轮向上滚动时
            return e.deltaY
        }
        if (e.wheelDelta < 0) { //当滑轮向下滚动时
            return e.deltaY
    }
} else if (e.detail) {  //Firefox滑轮事件
    if (e.detail> 0) { //当滑轮向上滚动时
        return e.deltaY
    }
    if (e.detail< 0) { //当滑轮向下滚动时
        return e.deltaY
        }
    }
}

export default scrollFunc
//滚动滑轮触发scrollFunc方法