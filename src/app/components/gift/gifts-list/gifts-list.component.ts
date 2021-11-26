import { Component, OnInit } from '@angular/core';
import { GiftModel } from 'src/app/models/gift';
import { GiftsService as GiftService } from 'src/app/services/gifts.service';

@Component({
  selector: 'app-gifts-list',
  templateUrl: './gifts-list.component.html',
  styleUrls: ['./gifts-list.component.scss']
})
export class GiftsListComponent implements OnInit {

  gifts: GiftModel[];
  loading: boolean = true;
  failed: boolean = false;

  constructor(
    private giftService: GiftService,
  ) { }

  ngOnInit(): void {
    this.loading = true;

    this.giftService.listGifts(0, 5).subscribe(
      res => { this.gifts = res.data; this.loading = false; },
      err => { this.failed = true; this.loading = false; },
    )
  }

}
