import { Component } from '@angular/core';
import {DropdownModule} from 'primeng/dropdown';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import { RippleModule} from 'primeng/ripple';
import {BadgeModule} from 'primeng/badge';
import {AvatarModule} from 'primeng/avatar';
import {InputTextModule} from 'primeng/inputtext';
import {MenubarModule} from 'primeng/menubar';
import {CommonModule, NgIf, NgOptimizedImage} from '@angular/common';
import {PrimeNGConfig} from 'primeng/api';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    TranslateModule,
    DropdownModule,
    RippleModule,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    MenubarModule,
    CommonModule,
    FormsModule,
    NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  languages = [
    { name: 'French', code: 'fr' },
    { name: 'English', code: 'us' },
  ];

  constructor(private primengConfig: PrimeNGConfig, private translateService: TranslateService, private appService: AppService) {}

  themes = [
    {
      id: 'lara-light-blue',
      label: 'Lara Light Blue'
    },
    {
      id: 'luna-green',
      label: 'Luna Green'
    },
    {
      id: 'md-dark-deeppurple',
      label: 'MD Dark Deeppurple'
    }
  ];

  items = [
    {
      label: 'header.userList',
      icon: 'pi pi-fw pi-user',
      routerLink: ['/user-list']
    },
    {
      label: 'header.userProfile',
      icon: 'pi pi-fw pi-user-edit',
      routerLink: ['/user-profile']
    }
    ]

  selectedLanguage: { name: string; code: string } = this.languages[0];
  selectedTheme: { id: string; label: string } = this.themes[0];

  changeTheme(themeId: string) {
    this.appService.switchTheme(themeId);
  }

  switchLanguage(langCode: string) {
    this.translateService.use(langCode);
    this.translateService.get('primeng').subscribe((res) => {
      this.primengConfig.setTranslation(res);
    });
  }
}
