class TrainsController < ApplicationController
  before_action :set_train, only: %i[ show update destroy ]

  # GET /trains
  def index
    trains = Train.where("departureTime >= ? AND departureTime <= ?", Time.now + 30.minutes, Time.now + 12.hours).order(priceSleeper: :asc, priceAC: :asc, seatsAvailablesleeper: :desc, seatsAvailableAC: :desc, departureTime: :desc)
    formatted_trains = trains.map do |train|
      {
        trainName: train.trainName,
        trainNumber: train.trainNumber,
        departureTime: {
          Hours: train.departureTime.hour,
          Minutes: train.departureTime.min,
          Seconds: train.departureTime.sec
        },
        seatsAvailable: {
          sleeper: train.seatsAvailablesleeper,
          AC: train.seatsAvailableAC
        },
        price: {
          sleeper: train.priceSleeper,
          AC: train.priceAC
        },
        delayedBy: train.delayedBy
      }
    end
    render json: formatted_trains
  end

  # GET /trains/1
  def show
    render json:@train
  end

  def trainDetails
    train = Train.find_by(trainNumber: params[:trainNumber])
    formatted_train = {
      trainName: train.trainName,
      trainNumber: train.trainNumber,
      departureTime: {
        Hours: train.departureTime.hour,
        Minutes: train.departureTime.min,
        Seconds: train.departureTime.sec
      },
      seatsAvailable: {
        sleeper: train.seatsAvailablesleeper,
        AC: train.seatsAvailableAC
      },
      price: {
        sleeper: train.priceSleeper,
        AC: train.priceAC
      },
      delayedBy: train.delayedBy
    }
    render json: formatted_train
  end


  # POST /trains
  def create
    @train = Train.new(train_params)
    # @train.departureTime = Time.new(2020, 8, train_params[:departureTime][:Day], train_params[:departureTime][:Hours], train_params[:departureTime][:Minutes], train_params[:departureTime][:Seconds])

    if @train.save
      render json: @train, status: :created, location: @train
    else
      render json: @train.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /trains/1
  def update
    if @train.update(train_params)
      render json: @train
    else
      render json: @train.errors, status: :unprocessable_entity
    end
  end

  # DELETE /trains/1
  def destroy
    @train.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_train
      @train = Train.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def train_params
      params.require(:train).permit(:trainName, :trainNumber, :departureTime, :seatsAvailablesleeper, :seatsAvailableAC, :priceSleeper, :priceAC, :delayedBy)
    end
end
