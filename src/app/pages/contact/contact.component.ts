import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validator,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  loading: boolean;
  success: boolean;
  info: string;

  constructor(private helperService: HelperService) {}

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', Validators.required),
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  GetValidationMessages(f: AbstractControl, name: string) {
    if (f.errors) {
      for (let errorName in f.errors) {
        if (errorName == 'required') return `${name} alanı boş olamaz`;
        else if (errorName == 'email') return `email formatı yanlış`;
        else if (errorName == 'minlength')
          return `${name} alanı en az 5 karakter olamlıdır`;
      }
    }
  }

  get getControls(){ return this.contactForm.controls}

  onsubmit() {
    if (this.contactForm.valid) {
      this.loading = true;
      this.helperService.sendContactEmail(this.contactForm.value).subscribe(
        (data) => {
          this.loading = false;
          this.success = true;
          this.contactForm.reset();
          this.info =
            'Mesajınız alınmıştır. En kısa sürede dönüş yapılacaktır.';
        },
        (error) => {
          this.success = false;
          this.info =
            'Bir hata meydan geldi. Lütfen daha sonra tekrar deniyiniz.';
        }
      );
    } else {
      return false;
    }
  }
}
