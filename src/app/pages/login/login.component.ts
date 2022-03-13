import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.formBuilder.group({
    email: ['eve.holt@reqres.in', [Validators.required, Validators.email]],
    password: [
      'cityslicka',
      [Validators.required, Validators.minLength(6), Validators.maxLength(12)],
    ],
  });

  // eğer dönecek olan result için model tanımlamak istemezsek bu durumda any olarak modelin dönüşünü işaretleyebiliriz.
  loginResult$: Observable<any> | undefined;

  // FormBuilder ile formu component'imiz içerisinde initialize ediyoruz.
  // Validators üzerinden form validayonlarını tanıtıyoruz.
  //  formControlName ile form içerisinde gönderilecek olan değerler işaretlenir. form içerisinde bir değişim olunca direk loginForm üzerinden ilgili alanlara ait değişimleri görebiliriz.

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  LoginSubmit() {
    const formValues = this.loginForm.value; // formda bulunan değerleri object olarak yakalamızı sağlar.

    console.log('formValues', formValues);

    if (this.loginForm.valid) {
      // api git

      // this.loginResult$ = this.loginService.fakelogin(formValues);
      this.loginResult$ = this.loginService.login(formValues);

      // sonucunu izlemeye alıyoruz.
      this.loginResult$.subscribe((response) => {
        console.log('response', response);

        if (response.succeded) {
          this.router.navigateByUrl(response.redirect);
        } else {
          alert(response.message);
        }
      });
    }
  }
}
