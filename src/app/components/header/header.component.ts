import { Component } from '@angular/core';
import { manga } from 'Manga';
// import {} from '../header/script.js';
import {PopularMangaService} from 'src/app/services/popular-manga.service';
import {ImageService} from 'src/app/services/image.service'

declare function carousal():any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  data$: any;
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


  constructor(private popularManga:PopularMangaService, private imageService:ImageService){

  }
  ngOnInit(){
    carousal();
    this.popularManga.getManga().subscribe(
      (res)=>{
        this.data$ = res;
        console.log(this.data$);
      
      
      this.wrapper(this.data$.data)
        
      }
    );
    
    
  }
 
}




