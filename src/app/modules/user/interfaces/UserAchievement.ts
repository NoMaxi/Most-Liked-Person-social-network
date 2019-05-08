export interface UserAchievement {
  submited_time: string;
  who_added_award: string;
  _id: string;
  user_id: string;
  picture_id?: {
    likes: string[];
    _id: string;
    url: string
  };
  achievement_type: string;
  achievement_url: string;
  __v: number;
}
