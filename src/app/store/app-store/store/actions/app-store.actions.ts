import { createAction, props } from '@ngrx/store';
import { IArticle } from 'src/app/shared/interfaces/interfaces';

export enum AppActions {
  getArticlesListAction = '[APP_STORE] GET_ARTICLES_LIST',
  setArticlesListAction = '[APP_STORE] SET_ARTICLES_LIST',

  getFullArticleAction = '[APP_STORE] GET_FULL_ARTICLE_LIST',
  setFullArticleAction = '[APP_STORE] SET_FULL_ARTICLE_LIST',

  setSearchAction = '[APP_STORE] SET_SEARCH',
}

export const getArticlesListAction = createAction(
  AppActions.getArticlesListAction,
  props<{ value: string }>()
);
export const setArticlesListAction = createAction(
  AppActions.setArticlesListAction,
  props<{ data: IArticle[] }>()
);

export const getFullArticleAction = createAction(
  AppActions.getFullArticleAction,
  props<{ id: number }>()
);

export const setFullArticleAction = createAction(
  AppActions.setFullArticleAction,
  props<{ data: IArticle }>()
);

export const setSearchAction = createAction(
  AppActions.setSearchAction,
  props<{ value: string }>()
);
