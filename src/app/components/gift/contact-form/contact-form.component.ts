import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  nameMaxLen: number = 200;
  emailMaxLen: number = 200;

  form: FormGroup;
  loading: boolean = false;
  submitted: any;
  
  constructor(
    private fb: FormBuilder,
    private contactService: ContactsService,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.maxLength(this.nameMaxLen)]],
      mobile: [null, [Validators.required, Validators.minLength(9), Validators.maxLength(11)]],
    });
  }

  submit() {
    if (!this.form.valid) {
      return;
    }

    this.loading = true;
    this.contactService.createContact({
      name: this.form.value.name,
      mobile: this.form.value.mobile,
    }).subscribe(
      _ => {
        this.submitted = true;
        this.loading = false;
      }, _ => this.loading = false,
    )
  }

  getError(controlName: string) {
    let control = this.form.get(controlName);

    if (control.hasError('maxlength')) {
      return 'Digite até 200 caracteres';
    } else if (control.hasError('minlength')) {
      return 'Digite pelo menos 9 dígitos';
    } else if (control.hasError('required')) {
      return 'Este campo é obrigatório';
    }

    return null;
  }
}
