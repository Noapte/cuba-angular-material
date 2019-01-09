import {Component} from '@angular/core';
import {CubaRestService} from "./cuba-rest.service";
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loginModel = {
    appUrl: 'http://localhost:8080/app/rest/',
    login: null,
    password: null
  };

  loggedIn = false;
  deviceInfo = null;

  constructor(private cubaRest: CubaRestService, private deviceService: DeviceDetectorService) {
    this.epicFunction();
  }

  onSubmit() {
   // this.epicFunction();
    this.cubaRest.login(this.loginModel.appUrl, this.loginModel.login, this.loginModel.password)
      .then(() => {
        this.loggedIn = true;
      //   let a = this.cubaRest;
      //   let b = 2;
      //   return this.cubaRest.logout().then(()=> {
      //
      //   });
       })
      .catch(() => {
        // return this.cubaRest.logout().then(()=> {
        //
        // });
        alert('Login error');
      });
  }

  epicFunction() {
    // console.log('hello `Home` component');
    // this.deviceInfo = this.deviceService.getDeviceInfo();
    // const isMobile = this.deviceService.isMobile();
    // const isTablet = this.deviceService.isTablet();
    // const isDesktopDevice = this.deviceService.isDesktop();
    // console.log(this.deviceInfo);
    // console.log(isMobile);  // returns if the device is a mobile device (android / iPhone / windows-phone etc)
    // console.log(isTablet);  // returns if the device us a tablet (iPad etc)
    // console.log(isDesktopDevice); // returns if the app is running on a Desktop browser.
  }

}
