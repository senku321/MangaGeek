import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopularMangaService {

  date: Date = new Date();
  d = this.date.getDate();
  mon = this.date.getMonth() ;
  m = this.mon>10?this.mon:'0' + this.mon;
  y = this.date.getFullYear();


  private baseUrl:string = `https://api.mangadex.org/manga?includes[]=cover_art&includes[]=artist&includes[]=author&order[followedCount]=desc&contentRating[]=safe&contentRating[]=suggestive&hasAvailableChapters=true&createdAtSince=${this.y}-${this.m}-08T10:56:23`;
  private url:string = 'https://api.mangadex.org/manga?includes[]=cover_art&includes[]=artist&includes[]=author&order[followedCount]=desc&contentRating[]=safe&contentRating[]=suggestive&hasAvailableChapters=true&createdAtSince=2023-09-08T09:27:24';
  constructor(private http:HttpClient) { }
  



  getManga(){
    let response = this.http.get(this.url);
    
    return response;
  }
}
