import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // FormGroup birden fazla formControl yapısının beraber kullanılmasını sağlar. FormControlleri gruplamamızı sağlar.
  loginForm: FormGroup = this.formBuilder.group({
    email: ['eve.holt@reqres.in', [Validators.required, Validators.email]], // FormControl alanları
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

    console.log('formValues', formValues); // email password

    if (this.loginForm.valid) {
      // api git

      // this.loginResult$ = this.loginService.fakelogin(formValues);
      this.loginResult$ = this.loginService.fakelogin(formValues);

      // sonucunu izlemeye alıyoruz.
      // fecth ile çalışırken Then ile promise çözüldüğünde veriyi elde ederken.
      // rxjs kullanırken ilgili Observable tipindeki nesneleri takibe alabilmek için subscribe oluyoruz.
      this.loginResult$.subscribe((response) => {
        console.log('response', response);

        if (response.succeded) {
          // sayfa refreshlensin diye direk yönledirdik.
          window.location.href = response.redirect;
        } else {
          // hata varsa login olmazsak hata mesajını gösterdik.
          alert(response.message);
        }
      });
    }
  }
}
