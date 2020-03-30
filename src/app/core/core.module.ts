import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiUrlInterceptor } from './interceptors';
import { API_URL } from './providers';
import { environment } from 'src/environments/environment';


@NgModule({
  imports: [
    HttpClientModule,
  ],
  exports: [
    HttpClientModule,
  ],
})

export class CoreModule {
  public static forRoot(apiUrl: string): ModuleWithProviders<CoreModule> {
    console.log('123')
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: API_URL,
          useValue: environment.apiUrl,
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ApiUrlInterceptor,
          multi: true,
        },
      ],
    }
  }
}
