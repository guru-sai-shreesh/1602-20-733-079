require "test_helper"

class TrainsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @train = trains(:one)
  end

  test "should get index" do
    get trains_url, as: :json
    assert_response :success
  end

  test "should create train" do
    assert_difference("Train.count") do
      post trains_url, params: { train: { delayedBy: @train.delayedBy, departureTime: @train.departureTime, priceAC: @train.priceAC, priceSleeper: @train.priceSleeper, seatsAvailableAC: @train.seatsAvailableAC, seatsAvailablesleeper: @train.seatsAvailablesleeper, trainName: @train.trainName, trainNumber: @train.trainNumber } }, as: :json
    end

    assert_response :created
  end

  test "should show train" do
    get train_url(@train), as: :json
    assert_response :success
  end

  test "should update train" do
    patch train_url(@train), params: { train: { delayedBy: @train.delayedBy, departureTime: @train.departureTime, priceAC: @train.priceAC, priceSleeper: @train.priceSleeper, seatsAvailableAC: @train.seatsAvailableAC, seatsAvailablesleeper: @train.seatsAvailablesleeper, trainName: @train.trainName, trainNumber: @train.trainNumber } }, as: :json
    assert_response :success
  end

  test "should destroy train" do
    assert_difference("Train.count", -1) do
      delete train_url(@train), as: :json
    end

    assert_response :no_content
  end
end
