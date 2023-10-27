import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './components/title/title.component';
import { HomeComponent } from './components/home/home.component';
import { ReaderComponent } from './components/reader/reader.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: "title/:id", component: TitleComponent},
  {path: "chapter/:chapid",component: ReaderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
