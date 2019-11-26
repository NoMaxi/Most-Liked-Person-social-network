export interface UserFavouriteImage {
  likes: string[];
  views: string[];
  glories: Glory[];
  _id: string[];
  create_date: string[];
  url: string[];
}

type Glory = {
  achievment_id: string;
  type: string;
  achivment_url: string;
};
