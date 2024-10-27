import { Component } from '@angular/core';
import {DropdownModule} from 'primeng/dropdown';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import { RippleModule} from 'primeng/ripple';
import {BadgeModule} from 'primeng/badge';
import {AvatarModule} from 'primeng/avatar';
import {InputTextModule} from 'primeng/inputtext';
import {MenubarModule} from 'primeng/menubar';
import {NgIf} from '@angular/common';
import {PrimeNGConfig} from 'primeng/api';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';

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
    NgIf,
    FormsModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  languages = [
    { name: 'English', code: 'en' },
    { name: 'French', code: 'fr' },
  ];

  selectedLanguage: any = this.languages[0];

  constructor(private primengConfig: PrimeNGConfig, private translateService: TranslateService) {}

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

  switchLanguage(langCode: string) {
    this.translateService.use(langCode);
    this.translateService.get('primeng').subscribe((res) => {
      this.primengConfig.setTranslation(res);
    });
  }
}
