class TeacherSerializer < ActiveModel::Serializer
  attributes :id, :name, :bio, :image, :gender, :age
  has_many :students, serializer: StudentSerializer
end
