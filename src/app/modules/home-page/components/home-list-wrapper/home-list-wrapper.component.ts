import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IArticle } from 'src/app/shared/interfaces/interfaces';
import { selectArticlesListLoading } from 'src/app/store/app-store/store/selectors/app-store.selectors';


@Component({
  selector: 'app-home-list-weather-wrapper',
  templateUrl: './home-list-wrapper.component.html',
  styleUrls: ['./home-list-wrapper.component.scss'],
})
export class HomeListWrapperComponent implements OnInit {
  public listData$: Observable<{ loading: boolean, data: IArticle[] }> = this._store.pipe(select(selectArticlesListLoading));

  @ContentChild(TemplateRef) contentTemplate: TemplateRef<any>;

  constructor(private _store: Store) { }

  ngOnInit(): void { }
}
