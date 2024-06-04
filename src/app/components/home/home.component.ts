import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
  userData:any={};

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.route.queryParams.subscribe(params => {
     const encodedData = params['user'];
     if(encodedData){
      localStorage.setItem('user', encodedData);
      this.router.navigate(['/home']);
     }
    
   })
   this.userDetails()


  }

  userDetails(){
    const decodedData = JSON.parse(atob(localStorage.getItem('user')!));
    this.userData = decodedData;

  }

}
