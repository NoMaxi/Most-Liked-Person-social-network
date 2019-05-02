export interface User {
  avatar: string;
  city: string;
  country: string;
  cover: string;
  date_of_birth_day: string;
  date_of_birth_month: string;
  date_of_birth_year: string;
  email: string;
  email_is_active: boolean;
  email_on_comments: boolean;
  email_on_comments_reply: boolean;
  email_on_every_challenge: boolean;
  email_on_likes: boolean;
  email_on_new_challenges_once_week: boolean;
  email_on_new_followers: boolean;
  email_weekly_articles: boolean;
  favourites: string[];
  first_name: string;
  followers: string[];
  followings: string[];
  full_name: string;
  gender_orientation: string;
  glories: string[];
  is_blocked: boolean;
  is_deactivated: boolean;
  is_deleted: boolean;
  last_login_date: string;
  last_name: string;
  my_images: string[];
  nickname: string;
  paypal_id: string;
  phone: string;
  rank: {
    curent_rank: number,
    points: number,
    levels: Level[],
    next_rank: string,
    expert_picks: number
  };
  register_date: string;
  register_ip: string;
  type: string;
  vote_power: number;
  _id: string;
}

type Level = {
  type: number,
  count: number
};
