export interface Notification {
  created_at: string;
  message: string;
  readed: boolean;
  url: string;
  user_creator_id: {
    avatar: string;
    full_name: string;
    _id: string;
  };
  user_target_id: string;
  __v: number;

}
