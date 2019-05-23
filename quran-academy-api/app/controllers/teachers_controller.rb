class TeachersController < ApplicationController

  def index
    @teachers = Teacher.all
    render json: @teachers
  end

  def show
    puts params.inspect
    @teacher = Teacher.find(params[:id])
    render json: @teacher.to_json
  end

end