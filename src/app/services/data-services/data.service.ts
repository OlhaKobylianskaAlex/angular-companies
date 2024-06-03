import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { IArticle, IResponse } from 'src/app/shared/interfaces/interfaces';


@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _cacheArticles: Map<string, Observable<IArticle[]>> = new Map();
  private _cacheFullArticleInfo: Map<number, Observable<IArticle>> = new Map();

  constructor(private http: HttpClient) { }

  getArticlesList(search: string = '') {
    if (!this._cacheArticles.has(search)) {
      const data = this._getArticlesList(search).pipe(
        catchError((error: any) => throwError(() => `Error: ${error}`))
      );
      this._cacheArticles.set(search, data);
    }
    return this._cacheArticles.get(search)!;
  }
  _getArticlesList(search: string): Observable<IArticle[]> {
    if (!search) {
      return this.http.get<IResponse>(`/v4/articles/`).pipe(
        map((data: IResponse) => data.results)
      )
    } else {
      return this.http.get<IResponse>(`/v4/articles/`, { params: { search } }).pipe(
        map((data: IResponse) => {
          const array = data.results;
          const searchWords = search.split(' ');
          if (array.length > 30) array.length = 30;

          return array.sort((a, b) => {
            const countMatches = (text: string) => searchWords.filter(word => new RegExp(`\\b${word}\\b`, 'gi').test(text)).length;

            const aTitleMatches = countMatches(a.title);
            const bTitleMatches = countMatches(b.title);
            const aSummaryMatches = countMatches(a.summary);
            const bSummaryMatches = countMatches(b.summary);

            if (aTitleMatches !== bTitleMatches) return bTitleMatches - aTitleMatches;
            return bSummaryMatches - aSummaryMatches;
          });
        })
      );
    }
  }

  getFullArticleInfo(id: number): Observable<IArticle> {
    if (!this._cacheFullArticleInfo.has(id)) {
      const data = this._getFullArticleInfo(id).pipe(
        catchError((error: any) => throwError(() => `Error: ${error}`))
      );
      this._cacheFullArticleInfo.set(id, data)
    }
    return this._cacheFullArticleInfo.get(id)!;
  }
  _getFullArticleInfo(id: number): Observable<IArticle> {
    return this.http.get<IArticle>(`/v4/articles/${id}/`, { params: { id } })
  }
}
