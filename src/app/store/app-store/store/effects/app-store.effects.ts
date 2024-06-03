import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import {
  getArticlesListAction,
  getFullArticleAction,
  setArticlesListAction,
  setFullArticleAction
} from '../actions/app-store.actions';
import { DataService } from 'src/app/services/data-services/data.service';
import { Store, select } from '@ngrx/store';
import { selectSearch } from '../selectors/app-store.selectors';


@Injectable()
export class SearchWeatherEffects {
  constructor(private _actions$: Actions, private _data: DataService, private _store: Store) { }

  getArticlesListAction$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(getArticlesListAction),
      withLatestFrom(this._store.pipe(select(selectSearch))),
      switchMap(([action, search]) =>
        this._data.getArticlesList(search || action.value).pipe(
          map(data => setArticlesListAction({ data }))
        )
      )
    );
  });

  getFullArticleAction$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(getFullArticleAction),
      switchMap((action) =>
        this._data.getFullArticleInfo(action.id).pipe(
          map(data => setFullArticleAction({ data }))
        )
      )
    );
  });
}
