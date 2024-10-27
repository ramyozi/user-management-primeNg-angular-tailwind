import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PrimeNGConfig} from 'primeng/api';
import {TranslateService, TranslateModule} from '@ngx-translate/core';
import { DropdownModule } from 'primeng/dropdown';
import {HeaderComponent} from './layouts/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, TranslateModule, DropdownModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig, private translateService: TranslateService) {}

  title = 'user-management';
  ngOnInit() {
    this.primengConfig.ripple = true;
    this.translateService.setDefaultLang('fr');
  }
}
