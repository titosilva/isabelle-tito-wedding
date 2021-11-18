import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  get screenWidth(): number {
    return screen.width;
  }

  mdPoint: number = 768;

  constructor() { }

  ngOnInit(): void {
  }

}
