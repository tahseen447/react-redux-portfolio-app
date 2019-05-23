class TeacherSerializer < ActiveModel::Serializer
  attributes :id, :name, :bio, :image
  has_many :students, serializer: StudentSerializer
end
