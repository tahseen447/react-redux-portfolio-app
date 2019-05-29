class TeachersController < ApplicationController

  def index
    @teachers = Teacher.all
    render json: @teachers
  end

  def show
    @teacher = Teacher.find(params[:id])
    render json: @teacher.to_json
  end

  def create
    @teacher = Teacher.new(teacher_params)
    if @teacher.save
      render json: @teacher.to_json
    else
      render json: { errors: {message: "Failed to add new Teacher "}}
    end
  end


private
  def teacher_params
    params.require(:teacher).permit(:name, :age, :gender, :image, :bio)
  end


end
