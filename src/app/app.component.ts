import {Component} from '@angular/core';
import {AuthService} from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'whats-for-lunch';

  constructor(public authService: AuthService) {
  }

  doLogin() {
    this.authService.doLogin();
  }
}
