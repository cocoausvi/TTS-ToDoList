class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :item_name
      t.integer :quantity
      t.integer :list_id

      t.timestamps
    end
  end
end
