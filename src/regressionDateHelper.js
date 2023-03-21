// this function will calculate working days between two dates  considering jewish holidays and weekends
// this function retuns the number of working days between two dates
var effort =63;
function getWorkingDaysBetweenDates(startDate, endDate) {
    var count = 0;
    var curDate = startDate;
    while (curDate <= endDate) {
        var dayOfWeek = curDate.getDay();
        if (!isWeekend(dayOfWeek) ){
            count++;
        }
        curDate.setDate(curDate.getDate() + 1);
    }
    return count;

}
function isWeekend(dayOfWeek) {
    return dayOfWeek === 6 || dayOfWeek === 0;
}

