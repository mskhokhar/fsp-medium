class CreateFollowers < ActiveRecord::Migration[5.2]
  def change
    create_table :followers do |t|
      t.integer :user_id, null: false
      t.integer :follow_user_id, null: false

      t.timestamps
    end
    add_index :followers, [:user_id, :follow_user_id], unique: true
  end
end
