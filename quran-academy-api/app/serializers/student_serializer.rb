class StudentSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :image, :lesson, :gender, :lesson_date, :teacher_id
end
