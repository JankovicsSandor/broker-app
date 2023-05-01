import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, User, setUser } from '@state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'broker-app';

  constructor(private store: Store<AppState>) {

  }
  ngOnInit(): void {
    this.store.dispatch(setUser({
      user: <User>
        {
          firstName: "Don",
          lastName: "John",
          email: "john.doe@gmail.com",
          profilePicture: "assets/profile.jpg",
          balance: 0
        }
    }));
    // this.store.dispatch(setUser())
  }

}
