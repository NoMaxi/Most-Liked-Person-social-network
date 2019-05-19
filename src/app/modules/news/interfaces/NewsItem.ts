export interface NewsItem {
  date: string;
  owner: {
    avatar: string;
    country: string;
    full_name: string;
    _id: string;
  };
  pictures: {
    likes: string[];
    url: string;
    views: string[];
    _id: string;
  }[];
}
