import { createSelector } from '@reduxjs/toolkit';

import { selectAllPosts } from '../selectAllPosts/selectAllPosts';
import { selectShownPostsCount } from '../selectShownPostsCount/selectShownPostsCount';

export const selectPartPosts = createSelector(
    selectAllPosts,
    selectShownPostsCount,
    (posts, count) => posts.slice(0, count),
);
