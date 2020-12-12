import {User} from "./User";
import {Company} from "./Company";
 
//instruction to every other class 
//on how to be an argument to add marker.
interface Mappable{
  location: {
    lat: number,
    lng: number,
  }
 }
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(mapDiv: string){
    this.googleMap =  
    new google.maps.Map(document.getElementById(mapDiv), {
      zoom: 1,
      center: {
       lat: 0,
       lng: 0,
      }
    });
  }  
  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      }
    });
  }
}