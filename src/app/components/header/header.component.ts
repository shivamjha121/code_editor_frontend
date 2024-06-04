import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName: string = '';
  imgUrl: string = '';
  
  constructor( private router: Router) { }

  ngOnInit(): void {
    const user = JSON.parse(atob(localStorage.getItem('user')!));
    console.log(user.provider)
    if(user){
      if(user.provider== 'local'){
        this.userName = user.name
        this.imgUrl = 'https://us.123rf.com/450wm/flatdesign/flatdesign2009/flatdesign200900197/154641264-icona-utente-icona-della-gente-di-vettore-icona-vettore-profilo-illustrazione-della-persona.jpg?ver=6'
      }
      this.userName= user._json.name
      this.imgUrl = user._json.picture
    } 
    
   else{
      this.userName = 'Guest'
      this.imgUrl = 'https://us.123rf.com/450wm/flatdesign/flatdesign2009/flatdesign200900197/154641264-icona-utente-icona-della-gente-di-vettore-icona-vettore-profilo-illustrazione-della-persona.jpg?ver=6'
    }
  }
  logout(){
    localStorage.removeItem('user');
    this.router.navigate([''])
  }
}
