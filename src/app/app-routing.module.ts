import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './modules/main/main.component';
import { NewsComponent } from './modules/navigation/news/news.component';
import { NewComponent } from './modules/navigation/new/new.component';
import { Tier1Component } from './modules/navigation/tier1/tier1.component';
import { Tier2Component } from './modules/navigation/tier2/tier2.component';
import { NavigationComponent } from './modules/navigation/navigation.component';
import { RewordsComponent } from './modules/rewords/rewords.component';


const routes: Routes = [
    { path: '', component: MainComponent, children: [
      { path: 'rewords', component: RewordsComponent },
      { path: 'news', component: NavigationComponent, children: [
        { path: 'all', component: NewsComponent },
        { path: 'new', component: NewComponent },
        { path: 'tier1', component: Tier1Component },
        { path: 'tier2', component: Tier2Component }
      ] },
    ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
