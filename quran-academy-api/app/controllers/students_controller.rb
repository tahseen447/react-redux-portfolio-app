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
    puts params.inspect
    @student = Student.find(params[:id])
    @student.update(student_params)
    binding.pry
    render json: @student
   end


  private
  def student_params
    params.require(:student).permit(:id, :name, :lesson, :lesson_date)
  end

end
