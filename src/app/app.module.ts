import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { LandingPageModule } from './landing-page/landing-page.module';
import { LazyImgDirectiveDirective } from './lazy-img-directive.directive';
import { SpinnerComponent } from './spinner/spinner/spinner.component';
import { LoaderService } from './core/service/loader.service';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { DecouvrirModule } from './decouvrir/decouvrir.module';

@NgModule({
  declarations: [
    AppComponent,
    LazyImgDirectiveDirective,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LandingPageModule,
    HttpClientModule,
    DecouvrirModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
