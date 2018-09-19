class CreateRecepies < ActiveRecord::Migration[5.2]
  def change
    create_table :recepies do |t|
      t.text :description
      t.string :title
      t.text :directions
      t.time :prep_time

      t.timestamps
    end
  end
end
