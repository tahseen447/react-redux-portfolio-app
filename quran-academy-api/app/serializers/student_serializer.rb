class StudentSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :image, :lesson, :gender, :lesson_date
  belongs_to :teacher, serializer: TeacherSerializer
end
