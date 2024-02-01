export interface Show {
  id: number;
  name: string;
  url: string;
  score: number;
  genres: string[];
  language: string;
  network: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    };
  };
  officialSite: string;
  premiered: string;
  rating: {
    average: number;
  };
  runtime: number;
  schedule: {
    time: string;
    days: string[];
  };
  status: string;
  summary: string;
  type: string;
  updated: number;
  image: {
    medium: string;
    original: string;
  } | null;
}
