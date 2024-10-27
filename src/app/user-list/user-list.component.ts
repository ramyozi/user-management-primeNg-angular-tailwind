import {Component} from '@angular/core';
import {CommonModule, NgForOf} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [TranslateModule, CommonModule],
    templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users = [
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Jane Doe', email: 'jane@example.com' },
  ];
}
