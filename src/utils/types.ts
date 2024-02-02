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

export type UserDataType = {
  name: string;
  email: string;
  seats: string;
  date: string;
};

export type ShowDataType = {
  image: {
    medium: string;
  } | null;
  showName: string;
  id: number;
  network?: {
    name: string;
    country: {
      code: string;
    };
  };
  schedule: {
    days: string[];
    time: string;
  };
  runtime: number;
  status: string;
  type: string;
  genres: string[];
  rating: {
    average: number;
  };
  officialSite?: string;
  language: string;
};

export type BookingDataType = {
  user: UserDataType;
  show: ShowDataType;
};

export type BookingDataArrType = BookingDataType[];
// export type BookingDataType = {
//   name: string;
//   email: string;
//   seats: string;
//   date: string;
//   image: {
//     medium: string;
//   } | null;
//   showName: string;
//   id: number;
//   network?: {
//     name: string;
//     country: {
//       code: string;
//     };
//   };
//   schedule: {
//     days: string[];
//     time: string;
//   };
//   runtime: number;
//   status: string;
//   type: string;
//   genres: string[];
//   rating: {
//     average: number;
//   };
//   officialSite?: string;
//   language: string;
// };
