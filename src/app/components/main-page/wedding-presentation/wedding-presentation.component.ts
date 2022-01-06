import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wedding-presentation',
  templateUrl: './wedding-presentation.component.html',
  styleUrls: ['./wedding-presentation.component.scss']
})
export class WeddingPresentationComponent implements OnInit {
  liveLink: string = "https://youtu.be/KTFqK2rEnxw";

  constructor() { }

  ngOnInit(): void {
  }

}
