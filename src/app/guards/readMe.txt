Guard açma işlemi

1- ng generate guard Auth
2- CanActivate method içerisinde localstorage da access_token var mı yok mu kontrolü yaptık. buna göre canActive true yada false döndürüyor
3- Eğer oturum açılmadıysa localstorage da access_token yoksa aşağıdaki kod ile Login sayfasına yöneldirdik


 if (!this.authService.IsAuthenticated()) {
      this.router.navigateByUrl('/login');
    }

4- Guard uygulama için kullanacağımız aşağıdaki kodu yazdık.

  {
    path: 'posts',
    component: PostsComponent,
    canActivate: [AuthGuard], // bu componente giderken araya girip pages componentin açılıp açılmayacağına karar vermiş oldu.
  },
