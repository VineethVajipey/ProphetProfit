var date = new Date('January 1, 2013 00:00:00');
console.log(date);

function simulation(){
    date.setDate(date.getDate()+7);
    console.log(date);
    return date;
}