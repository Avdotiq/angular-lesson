import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { NavigationComponent } from './modules/navigation/navigation.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MainComponent } from './modules/main/main.component';
import { NewsComponent } from './modules/navigation/news/news.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { NewComponent } from './modules/navigation/new/new.component';
import { Tier1Component } from './modules/navigation/tier1/tier1.component';
import { Tier2Component } from './modules/navigation/tier2/tier2.component';
import { RewordsComponent } from './modules/rewords/rewords.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainComponent,
    NewsComponent,
    NewComponent,
    Tier1Component,
    Tier2Component,
    RewordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    RouterModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
