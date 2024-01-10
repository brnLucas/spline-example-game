import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {Application} from '@splinetool/runtime';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'spline_game';

  public ngOnInit() {
    const canvas: any = document.getElementById('canvas3d');
    const app = new Application(canvas);
    app.load('assets/mini_home_conditional_logic_copy.spline');
  }
}




