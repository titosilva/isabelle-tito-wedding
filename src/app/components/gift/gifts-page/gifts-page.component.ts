import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ContactInfoDialogComponent } from '../../dialogs/contact-info-dialog/contact-info-dialog.component';
import { PixInfoDialogComponent } from '../../dialogs/pix-info-dialog/pix-info-dialog.component';

@Component({
  selector: 'app-gifts-page',
  templateUrl: './gifts-page.component.html',
  styleUrls: ['./gifts-page.component.scss']
})
export class GiftsPageComponent implements OnInit {

  constructor(
    public route: ActivatedRoute,
    private matDialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  showPixDialog() {
    this.matDialog.open(PixInfoDialogComponent);
  }

  showContactDialog() {
    this.matDialog.open(ContactInfoDialogComponent);
  }
}
