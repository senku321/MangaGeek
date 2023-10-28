import { Component } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { MangaService } from 'src/app/services/manga.service';
import { manga } from 'Manga';

@Component({
  selector: 'app-seasonal',
  templateUrl: './seasonal.component.html',
  styleUrls: ['./seasonal.component.css']
})
export class SeasonalComponent {
  name: String = "Seasonals";
  data: any;
  Mangas: manga[] = [];
  Manga: manga= {} as manga;

  async wrapper(d:any){
    for(let i of d){
      this.Manga = {} as manga;
      this.Manga.author = i.relationships[0].id;
      this.Manga.id = i.id;
      this.Manga.description = i.attributes.description.en;
      this.Manga.img= this.getImageId(i.relationships);
      this.Manga.title = i.attributes.title.en;
      await this.imageService.getImage(this.Manga.img).then((value)=>{
        this.Manga.img = value;
      })    
      this.Mangas.push(this.Manga);
    }
    
  }
  getImageId(d:Array<any>):string{
    let res = '';
    for(let i of d){
      if( i.type == 'cover_art'){
        res = i.id;
      }
    }
    return res;
  }

  constructor(private mangaService:MangaService, private imageService:ImageService){}
  ngOnInit(){
    this.mangaService.SeasonalMangas().subscribe((response)=>{
      this.data = response;
    
    this.wrapper(this.data.data);
    console.log("seasonals")
    console.log(this.data);
    
    })
  }
}
