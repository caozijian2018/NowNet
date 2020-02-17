export default()=>{
    var ua = navigator.userAgent.toLowerCase();
    return (/Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)) || ua.indexOf('qq') > -1;
}