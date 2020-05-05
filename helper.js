exports.getDateTime = function () {
    var today = new Date();
    // var date2 = new Date().toISOString().getTimezoneOffset()*60*1000).substr(0, 19).replace('T', ' ');
    // var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    // var dateTime = date+' '+time;

    // var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
    // var tzoffset = -7200000 //hardcoded as vm is not deployed in same timezone as user.
    var localTime = (new Date(Date.now())).toISOString().replace('T', ' ').substr(0, 19);

    return localTime;
}