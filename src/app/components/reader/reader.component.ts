import { Component } from '@angular/core';
import { ChaptersService } from 'src/app/services/chapters.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent {
  constructor(private chapters:ChaptersService,private route: ActivatedRoute) { }
  images:string[]=[];
  chapId:string =<string>this.route.snapshot.paramMap.get('chapid');
  async getImage(chapID:string){

    this.images = await this.chapters.getImages(chapID);

    console.log(this.images);
    
  }
  ngOnInit(){
    this.getImage(this.chapId);
  }
}
