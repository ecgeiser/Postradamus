class AddUserToPredictions < ActiveRecord::Migration
  def change
    add_reference :predictions, :user, index: true
  end
end
