var scrollFunc = function (e) {
    var direct = 0;
    e = e || window.event;
    if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件             
        if (e.wheelDelta > 0) { //当滑轮向上滚动时
            return 1
        }
        if (e.wheelDelta < 0) { //当滑轮向下滚动时
            return -1
    }
} else if (e.detail) {  //Firefox滑轮事件
    if (e.detail> 0) { //当滑轮向上滚动时
        return 1
    }
    if (e.detail< 0) { //当滑轮向下滚动时
        return -1
        }
    }
}

export default scrollFunc
//滚动滑轮触发scrollFunc方法