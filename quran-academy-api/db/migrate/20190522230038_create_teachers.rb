class CreateTeachers < ActiveRecord::Migration[5.2]
  def change
    create_table :teachers do |t|
      t.string :name
      t.integer :age
      t.string :gender
      t.string :image
      t.string :bio

      t.timestamps
    end
  end
end
