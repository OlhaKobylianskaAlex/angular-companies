import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState, appNode } from '../reducers/app-store.reducers';

const selectApp = createFeatureSelector<IAppState>(appNode);

export const selectArticlesListLoading = createSelector(selectApp, (state) => ({
  loading: state.articlesLoading,
  data: state.articles,
}));

export const selectArticleInfoLoading = createSelector(selectApp, (state) => ({
  loading: state.articleInfoLoading,
  data: state.articleInfo,
}));

export const selectSearch = createSelector(selectApp, (state) => state.search);
