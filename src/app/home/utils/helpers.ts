import { Comment } from '../+state/posts/posts.models';
import { groupBy } from 'lodash';

export const avatarSrcPath = (id?: number): string => {
  return `/assets/images/avatar/avatar${id || 1}.jpg`;
};

export const commentTree = (comments: Comment[]) => {
  const grouped = groupBy(
    comments,
    (item: Comment) => item.respondsTo?.id || 0
  );

  function commentsOf(parent_id: number = 0): Comment[] {
    return (grouped[parent_id] || []).map((item: Comment) => ({
      ...item,
      replies: commentsOf(item.id),
    }));
  }

  return commentsOf();
};
