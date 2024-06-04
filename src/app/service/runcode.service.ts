import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RuncodeService {

  constructor( private http: HttpClient) { }

  public runCode(code: any): Observable<any> {
    // console.log(code)

    return this.http.post("https://advanced-code-editor-backend.vercel.app/runcode", {
      script: code.script,
      language: code.language
    });

  }
}
