import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public isDesctopScreen = false;
  public isTabletScreen = false;
  public isSmallScreen = false;


  constructor(
    private breakpointObserver: BreakpointObserver
  ) {
    this.isDesctopScreen = breakpointObserver.isMatched('(min-width: 1440px)');
    this.isTabletScreen = breakpointObserver.isMatched('(max-width: 768px)');
    this.isSmallScreen = breakpointObserver.isMatched('(max-width: 650px)');
   }

  ngOnInit(): void {
  }

}
