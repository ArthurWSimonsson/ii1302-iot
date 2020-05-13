/* Author Arthur Simonsson */

/* Function to get and format the date as desired. Will be used with future implementations of the product. */

Date.prototype.addHours= function(h){
    var copiedDate = new Date();
    copiedDate.setTime(this.getTime() + (h*60*60*1000)); 
    return copiedDate;
}


exports.getDateTime = function () {


    var today = new Date();
    today.setHours(today.getHours() + 2);

    return today.toISOString().replace('T', ' ').substr(0, 19);
}