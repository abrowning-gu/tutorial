export class Car {
    carMake:string;
    carModel:string;
    carBodyType:string;
    carYearBuilt:number;
    carColour:string;
    carBadge:string;
    carPrice:number;
    carCount:number;
    constructor(carMake:string,carModel:string,carBodyType:string,carYearBuilt:number,carColour:string,carBadge:string,carPrice:number,carCount:number){
        this.carMake = carMake;
        this.carModel = carModel;
        this.carBodyType = carBodyType;
        this.carYearBuilt = carYearBuilt;
        this.carColour = carColour;
        this.carBadge = carBadge;
        this.carPrice = carPrice;
        this.carCount = carCount;
    }

}

