import faker, { fake } from "faker";
import {Mappable} from "./CustomMap";
export class Company implements Mappable{
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  }
  color: string = 'blue';

  constructor(){
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.latitude()),
    }
  }
  markerContent(): string {
    return `company name: ${this.companyName}
            Catchphrase: ${this.catchPhrase}`
  }
}