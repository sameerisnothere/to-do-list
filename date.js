
export const date = getDate;

function getDate(){
    var today = new Date();
var options = {
    weekday : "long",
    day : "numeric", 
    month : "long",
    year : "numeric"
};

var day = today.toLocaleDateString("ur-PK", options);
return day;
}

export function getDay(){
    var today = new Date();
var options = {
    weekday : "long",
   
};

var day = today.toLocaleDateString("ur-PK", options);
return day;
}