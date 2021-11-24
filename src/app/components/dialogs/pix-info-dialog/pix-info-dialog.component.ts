import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pix-info-dialog',
  templateUrl: './pix-info-dialog.component.html',
  styleUrls: ['./pix-info-dialog.component.scss']
})
export class PixInfoDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PixInfoDialogComponent>,
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }
}
