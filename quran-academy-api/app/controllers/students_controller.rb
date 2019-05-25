require 'pry'
class StudentsController < ApplicationController

  def index
    q = params[:q]
    if q.blank?
      @students = Student.all
    else
      @students = Student.where(["gender LIKE ?",`#{q}` ])
    end
    render json: @students
  end

  def show
    puts params.inspect
    @student = Student.find(params[:id])
    render json: @student.to_json
  end

  def update
    raise params
    binding.pry
    @student = Student.find(params[:id])
    @student.update(student_params)
    render json: @student
   end

   def edit
     @student = Student.find(params[:id])
   end

  private
  def student_params
    binding.pry
    params.require(:student).permit(:id, :name, :lesson, :lesson_date)
  end

end
