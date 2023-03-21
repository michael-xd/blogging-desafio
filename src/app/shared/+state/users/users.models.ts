export interface User {
  id: number;
  username: string;
  memberSince: string;
  friendIds: number[];
  posts: UserPost[];
}

export interface UserPost {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  isCollapsed: boolean;
}
