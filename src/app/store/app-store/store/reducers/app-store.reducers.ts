import { Action, createReducer, on } from '@ngrx/store';
import * as appActions from '../actions/app-store.actions';
import { IArticle } from 'src/app/shared/interfaces/interfaces';

export interface IAppState {
  articles: IArticle[],
  articlesLoading: boolean,
  articleInfo: IArticle | null,
  articleInfoLoading: boolean,
  search: string
}

const initialState: IAppState = {
  articles: [],
  articlesLoading: false,
  articleInfo: null,
  articleInfoLoading: false,
  search: ''
}

const appReducer = createReducer(
  initialState,
  on(
    appActions.setArticlesListAction,
    (state, { data }): IAppState => ({ ...state, articles: data })
  ),
  on(
    appActions.setFullArticleAction,
    (state, { data }): IAppState => ({ ...state, articleInfo: data })
  ),
  on(
    appActions.setSearchAction,
    (state, { value }): IAppState => ({ ...state, search: value })
  ),
  on(
    appActions.getArticlesListAction,
    appActions.setArticlesListAction,
    (state, { type }): IAppState => ({
      ...state,
      articlesLoading:
        type === appActions.AppActions.getArticlesListAction ? true : false,
    })
  ),
  on(
    appActions.getFullArticleAction,
    appActions.setFullArticleAction,
    (state, { type }): IAppState => ({
      ...state,
      articleInfoLoading:
        type === appActions.AppActions.getFullArticleAction ? true : false,
    })
  ),
);

export function AppReducers(state: IAppState | undefined, action: Action) {
  return appReducer(state, action);
}

export const appNode = 'app';
