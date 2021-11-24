import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session/session.service';
import { UserService } from '../../services/user/user.service';
import { User } from '../../../models/user.model';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'trading-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  user: User = {};

  constructor(
    private sessionService: SessionService,
    private userService: UserService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.user = this.userService.getUser();
  }

  onLogout() {
    this.sessionService.logout(this.user);
  }

}
