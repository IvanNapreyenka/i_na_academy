class Car {
    constructor(brand, model, year, engineType, fuelConsumption, firstPrice) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.engineType = engineType;
        this.fuelConsumption = fuelConsumption;
        this.firstPrice = firstPrice;
    }

    calcPrice() {
        return this.firstPrice + (this.year - 2023) * 1000;
    }
}

class Econom extends Car {
    constructor(brand, model, year, engineType, fuelConsumption, firstPrice) {
        super(brand, model, year, engineType, fuelConsumption, firstPrice);
    }

    calcPrice() {
        return super.calcPrice();
    }
}

class Comfort extends Car {
    constructor(brand, model, year, engineType, fuelConsumption, firstPrice) {
        super(brand, model, year, engineType, fuelConsumption, firstPrice);
    }

    calcPrice() {
        return super.calcPrice() * 90 / 100;
    }
}

class Business extends Car {
    constructor(brand, model, year, engineType, fuelConsumption, firstPrice) {
        super(brand, model, year, engineType, fuelConsumption, firstPrice);
    }

    calcPrice() {
        return super.calcPrice() * 85 / 100;
    }
}

class TaxiPark {
    constructor() {
        this.cars = [];
    }

    addCar(car) {
        this.cars.push(car);
    }

    calcParkPrice() {
        let totalPrice = 0;
        for (let car of this.cars) {
            totalPrice += car.calcPrice();
        }
        return totalPrice;
    }

    sortCarsByFuelConsumption() {
        this.cars.sort((a, b) => b.fuelConsumption - a.fuelConsumption);
    }

    searchCar(params) {
        return this.cars.filter(car => car.fuelConsumption >= params.minFuelConsumption && car.fuelConsumption <= params.maxFuelConsumption && car.year >= params.minYear && car.year <= params.maxYear);
    }
}

let geelyEmgrand = new Econom('Geely', 'Emgrand', 2017, 'petrol', 7.9, 16000);
let hyndaiSolaris = new Econom('Hyndai', 'Solaris', 2018, 'petrol', 8.1, 14500);
let kiaRio = new Econom('Kia', 'Rio', 2018, 'petrol', 7.1, 15200);
let renaultLogan = new Econom('Renault', 'Logan', 2018, 'petrol', 8.2, 13000);
let volkswagenPolo = new Econom('Volkswagent', 'Polo', 2015, 'petrol', 7.5, 16700);
let toyotaCamry = new Comfort('Toyota', 'Camry', 2020, 'petrol', 9.4, 34000);
let volvoS60 = new Comfort('Volvo', 'S60', 2019, 'petrol', 7.1, 37500);
let skodaSuperb = new Comfort('Skoda', 'Superb', 2018, 'petrol', 8.8, 32000);
let mercedesE = new Business('Mercedes', 'E-class', 2021, 'petrol', 9.7, 44000);
let jaguarXf = new Business('Jaguar', 'XF', 2020, 'petrol', 11.5, 56000);
let audiA6 = new Business('Audi', 'A6', 2022, 'petrol', 10.2, 44300);
let park = new TaxiPark();

park.addCar(geelyEmgrand);
park.addCar(hyndaiSolaris);
park.addCar(kiaRio);
park.addCar(renaultLogan);
park.addCar(volkswagenPolo);
park.addCar(toyotaCamry);
park.addCar(volvoS60);
park.addCar(skodaSuperb);
park.addCar(mercedesE);
park.addCar(jaguarXf);
park.addCar(audiA6);

// Расчет стоимости парка
console.log(park.calcParkPrice());

park.sortCarsByFuelConsumption();

// Вывод отсортированного массива автомобилей
console.log(park.cars);

// Поиск автомобиля, удовлетворяющие заданным параметрам
let searchParams = {
    minFuelConsumption: 8,
    maxFuelConsumption: 9,
    minYear: 2018,
    maxYear: 2019
}
console.log(park.searchCar(searchParams));