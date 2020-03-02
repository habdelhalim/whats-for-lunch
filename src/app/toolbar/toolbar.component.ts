import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Input('title') title: string;

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
  }

  doLogin() {
    this.authService.doLogin();
  }

}
