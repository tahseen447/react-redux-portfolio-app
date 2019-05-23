class StudentSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :image, :lesson, :gender
  belongs_to :teacher, serializer: TeacherSerializer
end
