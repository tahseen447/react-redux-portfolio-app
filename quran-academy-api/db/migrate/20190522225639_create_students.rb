class CreateStudents < ActiveRecord::Migration[5.2]
  def change
    create_table :students do |t|
      t.string :name
      t.string :gender
      t.integer :age
      t.string :image
      t.string :lesson
      t.date :lesson_date

      t.timestamps
    end
  end
end
