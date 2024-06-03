import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IArticle } from 'src/app/shared/interfaces/interfaces';

@Component({
  selector: 'app-details-cards',
  templateUrl: './details-cards.component.html',
  styleUrls: ['./details-cards.component.scss'],
})
export class DetailsCardsComponent implements OnInit {
  @Input() data: IArticle | null = null;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  public redirectBack() {
    this._router.navigate(['/home']);
  }
}
