Date.prototype.addHours= function(h){
    var copiedDate = new Date();
    copiedDate.setTime(this.getTime() + (h*60*60*1000)); 
    return copiedDate;
}


exports.getDateTime = function () {
    // Date.prototype.addHours = function(h) {
    //     this.setTime(this.getTime() + (h*60*60*1000));
    //     return this;
    // }



    var today = new Date();
    // today.setHours(today.getHours() + 2);
    var localTime = today.addHours(2) 

    return localTime.toISOString().replace('T', ' ').substr(0, 19);
    // var date2 = new Date().toISOString().getTimezoneOffset()*60*1000).substr(0, 19).replace('T', ' ');
    // var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    // var dateTime = date+' '+time;

    // var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
    // var tzoffset = -7200000 //hardcoded as vm is not deployed in same timezone as user.
    // console.log
    // var localTime = (new Date(Date.now().addHours(2))).toISOString().replace('T', ' ').substr(0, 19);

    // return localTime;
}