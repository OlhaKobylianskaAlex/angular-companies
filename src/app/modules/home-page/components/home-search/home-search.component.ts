import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getArticlesListAction, setSearchAction } from 'src/app/store/app-store/store/actions/app-store.actions';
import { selectSearch } from 'src/app/store/app-store/store/selectors/app-store.selectors';

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.scss'],
})
export class HomeSearchComponent implements OnInit, OnDestroy {
  public search$: Observable<string> = this._store.pipe(select(selectSearch));
  public form: FormGroup = new FormGroup({
    value: new FormControl(''),
  });

  private _subscription: Subscription;

  constructor(private _store: Store) { }

  ngOnInit(): void {
    this._subscription = this.search$.subscribe(searchValue => {
      this.form.get('value')?.setValue(searchValue);
    });
  }

  ngOnDestroy(): void {
    this._subscription?.unsubscribe();
  }

  public search(value: string) {
    if (value) {
      this._store.dispatch(setSearchAction({ value }));
      this._store.dispatch(getArticlesListAction({ value }));
    }
  }
}
