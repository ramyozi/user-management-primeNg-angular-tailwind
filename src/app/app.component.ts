import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PrimeNGConfig} from 'primeng/api';
import {TranslateService, TranslateModule} from '@ngx-translate/core';
import { DropdownModule } from 'primeng/dropdown';
interface LanguageOption {
  name: string;
  code: string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule, DropdownModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  languages: LanguageOption[] = [
    { name: 'English', code: 'en' },
    { name: 'French', code: 'fr' },
  ];

  constructor(private primengConfig: PrimeNGConfig, private translateService: TranslateService) {}

  title = 'user-management';
  ngOnInit() {
    this.primengConfig.ripple = true;
    this.translateService.setDefaultLang('fr');
  }

  translateText(lang: string) {
    this.translateService.use(lang);
    this.translateService.get('primeng').subscribe(res => this.primengConfig.setTranslation(res));
  }
}
