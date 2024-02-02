// Library imports
import React, { useState, useEffect } from "react";

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

const AnotherComponent: React.FC = () => {
  const [storedData, setStoredData] = useState<
    {
      user: UserDataType;
      show: ShowDataType;
    }[]
  >([]);

  useEffect(() => {
    const dataFromLocalStorage = Object.values(localStorage)
      .filter((value) => value !== "undefined")
      .map((item) => JSON.parse(item));

    setStoredData(dataFromLocalStorage);
  }, []);
  console.log(storedData);
  return (
    <div>
      {storedData.map((item, index) => (
        <div key={index}>
          <h3>User Data</h3>
          {item.user && (
            <React.Fragment>
              <p>Name: {item.user.name}</p>
              <p>Email: {item.user.email}</p>
              <p>Seats: {item.user.seats}</p>
              <p>Date: {item.user.date}</p>
            </React.Fragment>
          )}
          <h3>Show Data</h3>
          {item.show && (
            <React.Fragment>
              <p>Show Name: {item.show.showName}</p>
              <p>Show ID: {item.show.id}</p>
              {/* Render other show data properties as needed */}
            </React.Fragment>
          )}
        </div>
      ))}
    </div>
  );
};
export default AnotherComponent;
