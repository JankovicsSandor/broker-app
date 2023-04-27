import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, User, selectUserProps } from '@state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePictureComponent {
  actualUser$: Observable<User>;
  constructor(private store: Store<AppState>) {
    this.actualUser$ = this.store.select(selectUserProps);
  }
}
