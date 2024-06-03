import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IArticle } from 'src/app/shared/interfaces/interfaces';
import { selectSearch } from 'src/app/store/app-store/store/selectors/app-store.selectors';


@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss'],
})
export class HomeListComponent implements OnInit {
  public search$: Observable<string> = this._store.pipe(select(selectSearch));

  @Input() data: IArticle[] = [];

  constructor(private _store: Store, private _router: Router) { }

  ngOnInit(): void { }

  public redirectTo(id: number) {
    if (!isNaN(+id)) this._router.navigate(['/home', id]);
  }

  public imageError(img: HTMLElement) {
    img.setAttribute('src', '../../../../../assets/img/default.png');
  }
}
