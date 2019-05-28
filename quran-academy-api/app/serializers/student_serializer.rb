class StudentSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :image, :lesson, :gender, :teacher_id
end
