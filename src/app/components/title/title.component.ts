import { Component } from '@angular/core';
import { ActivatedRoute, ResolveStart } from '@angular/router';
import { MangaService } from 'src/app/services/manga.service';
import { ChaptersService } from 'src/app/services/chapters.service';
import { ImageService } from 'src/app/services/image.service';


@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})

 

export class TitleComponent {
  constructor(private route: ActivatedRoute, private chapters:ChaptersService, private manga:MangaService,private imageService:ImageService) { }
  res:about={} as about;
  id:string =<string>this.route.snapshot.paramMap.get('id');
  
  fil(data:chapter[]){
    this.res.chapters= data.filter((value)=>value.attributes.translatedLanguage=="en")
  }
  
  // getAltTitle(titles:object[]):string{
  //   for(let i of titles){
  //     if()
  //   }
  // }
  filterDetails(data:any){
    // this.res.author = data.relationships
    for(let i of data.relationships){
      if(i.type=="author"){
        this.res.author = i.id;
      }
      else if(i.type=="cover_art"){
        this.res.image = i.id;
      }
    }
    this.imageService.getImage(this.res.image).then((value)=>{
      this.res.image = value;
    })   
    this.res.title = data.attributes.title.en;
    // this.res.altTitle = this.getAltTitle(data.attributes.altTitles);
    this.res.altTitle=data.attributes.altTitles.find((obj:any) => obj.hasOwnProperty('ja'))?.ja;
    this.res.description= data.attributes.description.en;
    this.res.tags = new Array();
    for(let i of data.attributes.tags){
      this.res.tags.push(i.attributes.name.en);
    }
  }

  getChapters(){
    this.chapters.getChapters(this.id).subscribe((response:any)=>{
      console.log(response.data);
      this.fil(response.data)
    })
  }

  getDetails(){
    this.manga.getMangas(this.id).subscribe((response:any)=>{
      console.log("manga details");
      console.log(response);
      this.filterDetails(response.data);

    })
  }
  // async getImage(chapID:string){

  //   this.images = await this.chapters.getImages(chapID);
    
    
  // }


  ngOnInit() {
    // const id:string = <string>this.route.snapshot.paramMap.get('id');
    this.getChapters();
    this.getDetails();
    console.log(this.res);
    
  }

}

interface chapter{
  attributes:any;
  id:string;
  relationships:any;
  type:string;
}

interface about{
  altTitle:string;
  image:string;
  title:string;
  description:string;
  author:string;
  tags:string[];
  chapters:chapter[];

}
