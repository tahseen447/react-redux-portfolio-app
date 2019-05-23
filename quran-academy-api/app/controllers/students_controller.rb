class StudentsController < ApplicationController

  def index
    @students = Student.all
    render json: @students
  end

  def show
    puts params.inspect
    @student = Student.find(params[:id])
    render json: @student.to_json
  end

  def update
    @student = Student.find(params[:id])
    @student.update(student_params)
    render json: @student
   end

   def edit
   end

  private
  def student_params
    params.require(:student).permit(:id, :name, :lesson, :lesson_date)
  end

end
