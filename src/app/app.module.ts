import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { provideHttpClient } from '@angular/common/http';
import { EditorComponent } from './components/editor/editor.component';
import { HeaderComponent } from './components/header/header.component';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    EditorComponent,
    HeaderComponent,
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    MonacoEditorModule.forRoot(),
    FormsModule,
    
  ],
  providers: [ provideHttpClient()],
  bootstrap: [AppComponent,HomeComponent,LoginComponent]
})
export class AppModule { }
