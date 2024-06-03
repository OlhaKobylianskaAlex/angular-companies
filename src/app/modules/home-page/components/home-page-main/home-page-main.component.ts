import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getArticlesListAction } from 'src/app/store/app-store/store/actions/app-store.actions';


@Component({
  selector: 'app-home-page-main',
  templateUrl: './home-page-main.component.html',
  styleUrls: ['./home-page-main.component.scss'],
})
export class HomePageMainComponent implements OnInit {

  constructor(private _store: Store) { }

  ngOnInit(): void {
    this._store.dispatch(getArticlesListAction({ value: '' }));
  }
}
