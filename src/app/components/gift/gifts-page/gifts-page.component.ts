import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PixInfoDialogComponent } from '../../dialogs/pix-info-dialog/pix-info-dialog.component';

@Component({
  selector: 'app-gifts-page',
  templateUrl: './gifts-page.component.html',
  styleUrls: ['./gifts-page.component.scss']
})
export class GiftsPageComponent implements OnInit {

  constructor(
    private matDialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  showPixDialog() {
    this.matDialog.open(PixInfoDialogComponent);
  }

}
