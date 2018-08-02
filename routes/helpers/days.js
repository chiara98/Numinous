var date1 = new Date(req.query.date1);
var date2 = new Date(req.query.date2);
var timeDiff = Math.abs(date2.getTime() - date1.getTime());
var diffDays = Math.ceil(timeDiff/ (1000 * 3600 *24));
alert(diffDays);
