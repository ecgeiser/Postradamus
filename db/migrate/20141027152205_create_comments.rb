class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :commenter, presence: true
      t.text :body, presence: true
      t.references :prediction, index: true

      t.timestamps
    end
  end
end
