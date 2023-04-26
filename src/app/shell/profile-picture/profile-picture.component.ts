import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, UserState, selectUserProps } from '@state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePictureComponent {
  actualUser$: Observable<UserState>;
  constructor(private store: Store<State>) {
    this.actualUser$ = this.store.select(selectUserProps);
  }
}
