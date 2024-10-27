import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  switchTheme(themeId: string) {
    let themeLink = document.getElementById('app-theme') as HTMLLinkElement;

    if (!themeLink) {
      themeLink = document.createElement('link');
      themeLink.rel = 'stylesheet';
      themeLink.id = 'app-theme';
      document.head.appendChild(themeLink);
    }

    themeLink.href = `/themes/${themeId}.css`;
  }
}
