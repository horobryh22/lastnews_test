import { useCallback } from 'react';

import { PostsView } from 'enums';
import { useAppDispatch } from 'hooks/useAppDispatch/useAppDispatch';
import { useTypedSelector } from 'hooks/useTypedSelector/useTypedSelector';
import { selectPostsView } from 'store/selectors';
import { postsActions } from 'store/slices';

type UseViewResult = [PostsView, () => void];

export const useView = (): UseViewResult => {
    const dispatch = useAppDispatch();
    let view = useTypedSelector(selectPostsView);

    const toggleView = useCallback(() => {
        switch (view) {
            case PostsView.LIST:
                dispatch(postsActions.setPostsView(PostsView.TILE));
                break;
            case PostsView.TILE:
                dispatch(postsActions.setPostsView(PostsView.LIST));
                break;
        }
    }, [dispatch, view]);

    return [view, toggleView];
};
