import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter,first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChaptersService {

  constructor(private http:HttpClient){}
  ImagesUrl:string = 'https://api.mangadex.org/at-home/server/b1376a89-b01e-435a-90dd-ef51d50ce468?forcePort443=false';
  imageData:any;

  image = 'https://uploads.mangadex.org/data/2f94349f59109b7901fb1e24f58d6f6e/1-c65deace84861a4683a18805bf2f1c541bf4398795d5de96ce71fecc1adbff7e.png';


  getChapters(id:string){
    const url = `https://api.mangadex.org/manga/${id}/feed?limit=96&includes[]=scanlation_group&includes[]=user&order[volume]=desc&order[chapter]=desc&offset=0&contentRating[]=safe&contentRating[]=suggestive&contentRating[]=erotica&contentRating[]=pornographic`;
    const Allchap =  this.http.get(url);
    
    return Allchap;
  }
  // getImages(chapID:string){
  //    this.getChapter(chapID);
  //   //  if(this.imageData != null){
  //   //   console.log(this.imageData);
      
  //   //  }
  //   console.log(this.imageData);
  // }

  // getChapter(chapID:string){
  //   const url = `https://api.mangadex.org/at-home/server/${chapID}?forcePort443=false`;

  //    this.http.get(url)
  //   .pipe(first())
  //   .subscribe((value) => {
  //     this.imageData = value;
  //   });    
  // }

  async getImages(chapID: string) {
    await this.getChapter(chapID);
    console.log(this.imageData);
    const images = [];
    for (let i = 0; i < this.imageData.chapter.data.length; i++) {
      const url = `https://uploads.mangadex.org/data/${this.imageData.chapter.hash}/${this.imageData.chapter.data[i]}`;
      images.push(url);
    }
    // console.log(images);
    return images;
  }
  
  getChapter(chapID: string): Promise<void> {
    return new Promise((resolve) => {
      const url = `https://api.mangadex.org/at-home/server/${chapID}?forcePort443=false`;
  
      this.http.get(url)
        .pipe(first())
        .subscribe((value) => {
          this.imageData = value;
          resolve();
        });
    });
  }
  

}
