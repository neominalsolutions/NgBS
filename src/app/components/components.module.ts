import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component'; 
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsModule } from './bs.module';
// eğer layout içerisinde router outlet kullanacak isek RouterModule bu module import etmemiz gerekir.



@NgModule({
  declarations: [
    NavbarComponent,
    LayoutComponent,
    FooterComponent,
    SidemenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    //BsDropdownModule.forRoot(), // offcanvas içinde dropdown kullandığımız için bsDropdownModule bu modulede tanıttık
    BsModule // Bootstrap bir module haline getirdik.
  ],
  exports:[LayoutComponent]
})
export class ComponentsModule {} // kendi component modlümüzde Bs kullanmak için
