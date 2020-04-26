import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { AuthInterceptorService } from 'src/service/auth-interceptor.service';

import {NgZorroAntdModule} from 'ng-zorro-antd';
import { TestCaseComponent } from './test-case/test-case.component';
import { ProjectComponent } from './project/project.component';
import { FormsModule } from '@angular/forms';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';
import { PlusOutline, PlusSquareOutline, DragOutline, CloseOutline } from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [ PlusOutline, PlusSquareOutline, DragOutline,CloseOutline ];

export const httpInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},
];



@NgModule({
  declarations: [
    AppComponent,
    TestCaseComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzIconModule,
    HttpClientModule,
    HttpClientJsonpModule,
    NgZorroAntdModule,
    FormsModule,
  ],
  providers: [httpInterceptorProviders, { provide: NZ_ICONS, useValue: icons }],
  bootstrap: [AppComponent]
})
export class AppModule { }
