export interface Winner {
  submited_time: string;
  _id: string;
  challenge_id: string;
  member_id: {
    level: {
      curent_level: number;
      votes_to_next_level: number;
    };
    images: Image[];
    total_votes: number;
    points: number;
    exposure_value: number;
    _id: string;
    user_id: {
      avatar: string;
      _id: string;
      full_name: string;
    },
    challenge_id: string;
    submited_time: string;
    __v: 1
  };
  public_user_id: string;
  __v: number;
}

type Image = {
  votes: number;
  glories: [];
  _id: string;
  image_basic: {
    likes: string[];
    views: string[];
    _id: string;
    url: string;
  }
};



