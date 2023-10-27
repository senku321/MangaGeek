import { Component } from '@angular/core';
import { manga } from 'Manga';
import {MangaService} from './services/manga.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mangageek';

  

  // constructor(private mangaService:MangaService){ }
  // ngOnInit(): void{
  //   this.data = this.mangaService.getMangas();

  //   console.log("this i what i got----");
  //   console.log(this.data);
    
    
  // }
}
