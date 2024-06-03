import { Component, ContentChild, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data-services/data.service';
import { IArticle } from 'src/app/shared/interfaces/interfaces';
import { getFullArticleAction } from 'src/app/store/app-store/store/actions/app-store.actions';
import { selectArticleInfoLoading } from 'src/app/store/app-store/store/selectors/app-store.selectors';


@Component({
  selector: 'app-details-page-wrapper',
  templateUrl: './details-page-wrapper.component.html',
  styleUrls: ['./details-page-wrapper.component.scss'],
})
export class DetailsPageWrapperComponent implements OnInit, OnDestroy {
  public articleInfo$: Observable<{ loading: boolean, data: IArticle | null }> = this._store.pipe(
    select(selectArticleInfoLoading),
  );

  private _subscription: Subscription;

  @ContentChild(TemplateRef) contentTemplate: TemplateRef<any>;
  constructor(private _store: Store, private _dataService: DataService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((data: Params) => {
      this._store.dispatch(getFullArticleAction({ id: data['id'] }))
    })
  }

  ngOnDestroy(): void {
    this._subscription?.unsubscribe();
  }
}
