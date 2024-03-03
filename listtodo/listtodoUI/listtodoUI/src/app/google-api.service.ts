import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
const oAuthConfig:AuthConfig={
    issuer: 'https://accounts.google.com',
    strictDiscoveryDocumentValidation :false,
    redirectUri:'http://localhost:4200/todos',
    clientId:'171856031522-sm1er300upaflv99574deq5ggcqul65b.apps.googleusercontent.com',
    scope:'openid email profile',
    loginUrl: 'http://localhost:4200/todos' 
}
@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {

  constructor(private readonly oAuthService:OAuthService) {
    oAuthService.configure(oAuthConfig)
  
    oAuthService.loadDiscoveryDocument().then( ()=>{
      oAuthService.tryLoginImplicitFlow().then(()=>{
        if(!oAuthService.hasValidAccessToken())
        {
          oAuthService.initLoginFlow()
        }
        else{
          oAuthService.loadUserProfile().then( (userProfile)=>
          {
            console.log(JSON.stringify(userProfile))
          })
        }
      })
    })
    oAuthService.loginUrl='http://localhost:4200/todos'
    oAuthService.logoutUrl='https://www.google.com/accounts/Logout'
   }
   signout(){
    this.oAuthService.logOut();
    this.oAuthService.clearHashAfterLogin
   }
}
