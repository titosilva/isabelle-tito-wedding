import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GiftDetailedModel, GiftModel } from 'src/app/models/gift';
import { MatDialog } from '@angular/material/dialog';
import { GiftsService } from 'src/app/services/gifts.service';
import { ContactInfoDialogComponent } from '../../dialogs/contact-info-dialog/contact-info-dialog.component';
import { PixInfoDialogComponent } from '../../dialogs/pix-info-dialog/pix-info-dialog.component';

@Component({
  selector: 'app-gift-details',
  templateUrl: './gift-details.component.html',
  styleUrls: ['./gift-details.component.scss']
})
export class GiftDetailsComponent implements OnInit {

  giftId: string = null;
  loading: boolean = false;
  gift: GiftDetailedModel = null;

  constructor(
    private route: ActivatedRoute,
    private giftService: GiftsService,
    private matDialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.route.paramMap.subscribe(params => {
      this.giftId = params.get('id');
      this.giftService.getGift(this.giftId).subscribe(
        res => {
          this.gift = res.data;
          this.loading = false;
        }, err => this.loading = false,
      );
    });
  }

  showContactInfo() {
    this.matDialog.open(ContactInfoDialogComponent,{
      data: {
        description: 'Muito obrigado pelo presente! Entre em contato conosco para combinarmos o horário e o local!'
      }
    });
  }

  showPix() {
    this.matDialog.open(PixInfoDialogComponent);
  }
}
