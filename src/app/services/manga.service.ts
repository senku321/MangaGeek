import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import { Observable, concatMap, shareReplay, take } from 'rxjs';
import { manga } from 'Manga';
@Injectable({
  providedIn: 'root'
})
export class MangaService {
  
  private baseUrl:string = 'https://api.mangadex.org/manga/'
  private url:string = '';
  constructor(private http:HttpClient) { }
  
  getMangaIds(): Observable<any> {
    return this.http.get('https://api.mangadex.org/list/907b6e91-b511-4095-927f-30227ccadfdc');
  }
  
  SeasonalMangas(): Observable<any> {
    let params = new HttpParams();
    return this.getMangaIds().pipe(
      concatMap((response: any) => {
        const relationshipArray = response.data.relationships;
        relationshipArray.forEach((relationship:any) => {
          params = params.append('ids[]', relationship.id);
        });
        params=params.append('order[followedCount]','desc');
        params=params.append('hasAvailableChapters','true');
        
        return this.http.get('https://api.mangadex.org/manga', { params });
      })
    )
  }
  
  RecentMangas():Observable<any>{
    const url = 'https://api.mangadex.org/manga?limit=15&contentRating[]=safe&contentRating[]=suggestive&contentRating[]=erotica&order[createdAt]=desc&includes[]=cover_art';
    return this.http.get(url);
  }

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
