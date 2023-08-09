class CreateTrains < ActiveRecord::Migration[7.0]
  def change
    create_table :trains do |t|
      t.string :trainName
      t.string :trainNumber
      t.time :departureTime
      t.integer :seatsAvailablesleeper
      t.integer :seatsAvailableAC
      t.integer :priceSleeper
      t.integer :priceAC
      t.integer :delayedBy

      t.timestamps
    end
  end
end
