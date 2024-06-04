import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
    baseUrl = "https://sslogin.shivamjha2001.com/"
    redirectUrl:string = "https://code-editor.shivamjha2001.com/#/home";
    // redirectUrl:string = "heroic-marshmallow-38fe4e.netlify.app//home";

    // redirectUrl:string = "localhost:4200/home";

  constructor(private http: HttpClient, private router: Router) { }

  public login() {
    const user = localStorage.getItem("user")
    if (user) {
      this.router.navigate(['/home'])
    } else {
      const headers = new HttpHeaders({
        'redirect': this.redirectUrl
      })
      this.http.get(this.baseUrl, { headers: headers }).subscribe((res: any) => {
        console.log(res)
        if (res.status == "200") {

          window.location.href = res.url
        }
      }
      )}
  }

}