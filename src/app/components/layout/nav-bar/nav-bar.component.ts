import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @ViewChild('navContainer') navContainer: ElementRef;

  get screenWidth(): number {
    return screen.width;
  }

  mdPoint: number = 768;
  lastScroll: number = null;
  scrollBoundary: number = 2;
  hidden: boolean = false;
  showingNavMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.lastScroll = window.scrollY;

    window.addEventListener('scroll', _ => {
      if (window.scrollY == 0 || !this.lastScroll) {
        this.show();
        this.lastScroll = window.scrollY;
        return;
      }
      
      if (window.scrollY < this.lastScroll - this.scrollBoundary && this.hidden) {
        this.show();
      } else if (window.scrollY > this.lastScroll + this.scrollBoundary && !this.hidden) {
        this.hide();
      }

      this.lastScroll = window.scrollY;
    });
  }

  show() {
    this.hidden = false;
    this.navContainer.nativeElement.classList.remove('hide');
    this.navContainer.nativeElement.classList.add('show');
  }

  hide() {
    this.hidden = true;
    this.navContainer.nativeElement.classList.remove('show');
    this.navContainer.nativeElement.classList.add('hide');
  }

  showNavMenu() {
    this.showingNavMenu = true;
  }

  onCloseNavMenu() {
    this.showingNavMenu = false;
  }
}
