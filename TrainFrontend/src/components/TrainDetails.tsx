import React, { useState } from "react";
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

const TrainDetails = () => {
  const [trainId, setTrainId] = useState<string>("");
  const [train, setTrain] = useState<Train | null>(null);

  const fetchTrainDetails = async () => {
    if (!trainId) {
      return;
    }

    try {
      //   const response = await axios.get(
      //     `http://127.0.0.1:3000/train_details/${trainId}`
      //   ); // Replace with your backend API URL
      setTrain(mockTrains[0]);
    } catch (error) {
      console.error("Error fetching train details:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Get Train Details by ID</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Train ID"
          value={trainId}
          onChange={(e) => setTrainId(e.target.value)}
        />

        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={fetchTrainDetails}
          >
            Get Details
          </button>
        </div>
      </div>
      {train && (
        <div className="card">
          <div className="card-header">
            <h2>Train Details</h2>
          </div>
          <div className="card-body">
            <p>
              <strong>Train Name:</strong> {train.trainName}
            </p>
            <p>
              <strong>Train Number:</strong> {train.trainNumber}
            </p>
            <p>
              <strong>Departure Time:</strong> {train.departureTime.Hours}:
              {train.departureTime.Minutes}
            </p>
            <p>
              <strong>Seats Available (Sleeper):</strong>{" "}
              {train.seatsAvailable.sleeper}
            </p>
            <p>
              <strong>Seats Available (AC):</strong> {train.seatsAvailable.AC}
            </p>
            <p>
              <strong>Price (Sleeper):</strong> {train.price.sleeper}
            </p>
            <p>
              <strong>Price (AC):</strong> {train.price.AC}
            </p>
            <p>
              <strong>Delayed By:</strong> {train.delayedBy} mins
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainDetails;
