import { Component } from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  profile = {
    name: 'John Doe',
    email: 'john@example.com',
  };
}
