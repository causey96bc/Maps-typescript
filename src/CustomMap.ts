import {User} from "./User";
import {Company} from "./Company";
 
//instruction to every other class 
//on how to be an argument to add marker.
export interface Mappable{
  location: {
    lat: number,
    lng: number,
  }
  color: string
  markerContent(): string;
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
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      }
    });
   marker.addListener('click', () =>{
    const InfoWindow = new google.maps.InfoWindow({
      content: mappable.markerContent(),
    });
    InfoWindow.open(this.googleMap, marker)
   });
  }
}