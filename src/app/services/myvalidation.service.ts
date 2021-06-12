import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MyvalidationService {

  constructor() { }

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




}
