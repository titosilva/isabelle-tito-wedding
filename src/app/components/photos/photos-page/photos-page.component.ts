import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos-page',
  templateUrl: './photos-page.component.html',
  styleUrls: ['./photos-page.component.scss']
})
export class PhotosPageComponent implements OnInit {
  get photoNumbers(): number[] {
    let result = [];

    for (var i = 1; i <= 14; i++) {
      switch (i) {
        default:
          result.push(i);
      }
    }

    return result;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
