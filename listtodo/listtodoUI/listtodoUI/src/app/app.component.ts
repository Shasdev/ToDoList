
import { Component} from '@angular/core';
import { GoogleApiService } from './google-api.service';
import { UserInfo } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'listtodoUI';
  userinfo?:UserInfo
  constructor(private readonly google: GoogleApiService){   
   
  }
  logout(){
    this.google.signout()
  }
}
