import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pix-info-dialog',
  templateUrl: './pix-info-dialog.component.html',
  styleUrls: ['./pix-info-dialog.component.scss']
})
export class PixInfoDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PixInfoDialogComponent>,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  goToThanks() {
    this.router.navigate(['gifts', 'thanks']);
    this.close();
  }

  close() {
    this.dialogRef.close();
  }
}
