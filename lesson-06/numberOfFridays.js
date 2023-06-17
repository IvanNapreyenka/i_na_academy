let fridays = 0

let startDate = new Date(Date.UTC(2000, 00, 01));

let currentDate = new Date();

if (startDate.valueOf() < currentDate.valueOf()) {
    do {
        if (startDate.getDay() === 5 && startDate.getDate() === 13) {
            fridays++;
        }
        startDate.setDate(startDate.getDate() + 1);
    }
    while (currentDate.valueOf() > startDate.valueOf());
}

console.log(fridays);