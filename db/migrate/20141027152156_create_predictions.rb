class CreatePredictions < ActiveRecord::Migration
  def change
    create_table :predictions do |t|
      t.text :body, presence: true
      t.text :tags, array: true, default: []
      t.integer :upvotes
      t.integer :downvotes
      t.boolean :came_true

      t.timestamps
    end
  end
end
