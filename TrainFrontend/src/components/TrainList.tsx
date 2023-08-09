import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import mockTrains from "../mockData";

type DepartureTime = {
  Hours: number;
  Minutes: number;
  Seconds: number;
};

type SeatsAvailable = {
  sleeper: number;
  AC: number;
};

type Price = {
  sleeper: number;
  AC: number;
};

type Train = {
  trainName: string;
  trainNumber: string;
  departureTime: DepartureTime;
  seatsAvailable: SeatsAvailable;
  price: Price;
  delayedBy: number;
};

const TrainList = () => {
  const [trains, setTrains] = useState<Train[]>([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const apiUrl = "api/trains";

    async function fetchTrains() {
      try {
        // const response = await axios.get(apiUrl);
        // console.log("API Response:", response.data); // Log the API response
        setTrains(mockTrains);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchTrains();
  }, []);

  return (
    <div className="container mt-5">
      <h1>Train Schedule</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Train Name</th>
                <th>Train Number</th>
                <th>Departure Time</th>
                <th>Seats Available (Sleeper)</th>
                <th>Seats Available (AC)</th>
                <th>Price (Sleeper)</th>
                <th>Price (AC)</th>
                <th>Delayed By</th>
              </tr>
            </thead>
            <tbody>
              {trains.map((train) => (
                <tr key={train.trainNumber}>
                  <td>{train.trainName}</td>
                  <td>{train.trainNumber}</td>
                  <td>
                    {train.departureTime.Hours}:{train.departureTime.Minutes}
                  </td>
                  <td>Sleeper: {train.seatsAvailable.sleeper}</td>
                  <td>AC: {train.seatsAvailable.AC}</td>
                  <td>Sleeper: {train.price.sleeper}</td>
                  <td>AC: {train.price.AC}</td>
                  <td>{train.delayedBy} mins</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TrainList;
