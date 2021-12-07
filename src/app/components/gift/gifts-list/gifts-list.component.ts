import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GiftModel } from 'src/app/models/gift';
import { GiftsService as GiftService } from 'src/app/services/gifts.service';

@Component({
  selector: 'app-gifts-list',
  templateUrl: './gifts-list.component.html',
  styleUrls: ['./gifts-list.component.scss']
})
export class GiftsListComponent implements OnInit {

  gifts: GiftModel[] = [];
  loading: boolean = true;
  failed: boolean = false;

  offset: number = 0;
  quantity: number = 12;
  anyElementsRemaining: boolean = true;

  constructor(
    private giftService: GiftService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loadMoreGifts();
  }

  goToGiftDetails(id: string) {
    this.router.navigate(['gifts', 'details', id]);
  }

  loadMoreGifts() {
    this.loading = true;

    this.giftService.listGifts(this.offset, this.quantity).subscribe(
      res => { 
        
        this.gifts = this.gifts.concat(res.data);
        this.offset += this.quantity;

        if (res?.data?.length < this.quantity) {
          this.anyElementsRemaining = false;
        }
        
        this.loading = false; 
      },
      err => { this.failed = true; this.loading = false; },
    )
  }
}
