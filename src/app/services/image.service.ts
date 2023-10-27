import { HttpClient } from '@angular/common/http';
import {lastValueFrom} from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private Baseurl = 'https://api.mangadex.org/cover/';
  private url:string = '';
  constructor(private http:HttpClient) { }

  async getImage(id:string){
    this.url = '';
    this.url = this.Baseurl + id;
    let response = '';
    try {
      const result = await lastValueFrom(this.http.get(this.url)).then((value:any)=>{
        response = value.data.attributes.fileName;
      });
      return response;
    } catch (error) {
      console.error(error);
    }
   return response; 
  }
}
