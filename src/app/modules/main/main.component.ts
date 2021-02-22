import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public isSmallScreen = false;

  constructor(
    private breakpointObserver: BreakpointObserver
  ) {
    this.isSmallScreen = breakpointObserver.isMatched('(max-width: 650px)');
   }

  ngOnInit(): void {
  }

}
