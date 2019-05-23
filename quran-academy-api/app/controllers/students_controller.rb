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

end
