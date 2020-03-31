import { NgModule, ModuleWithProviders } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiUrlInterceptor } from './interceptors';
import { API_URL } from './providers';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
  ],
})

export class CoreModule {

  public static forRoot(): ModuleWithProviders<CoreModule> {
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
