import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-info-dialog',
  templateUrl: './contact-info-dialog.component.html',
  styleUrls: ['./contact-info-dialog.component.scss']
})
export class ContactInfoDialogComponent implements OnInit {

  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<ContactInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
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
