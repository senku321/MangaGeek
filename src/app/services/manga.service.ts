import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { manga } from 'Manga';
@Injectable({
  providedIn: 'root'
})
export class MangaService {
  
  private baseUrl:string = 'https://api.mangadex.org/manga/'
  private url:string = '';
  constructor(private http:HttpClient) { }
  



  getMangas(id?:String){
    if(!id)
    {
      this.url = this.baseUrl;
      return this.http.get(this.url);
    }
    else{
      this.url = this.baseUrl + id;
      return this.http.get(this.url);
    } 
    
    
  }

}
