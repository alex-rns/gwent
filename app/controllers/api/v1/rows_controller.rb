class Api::V1::RowsController < ApplicationController
  before_action :set_row, only: %i[set_effect]

  def set_weather
    manage_weather_status
  end

  def set_effect
    manage_effect
  end

  private

  def manage_weather_status
    result = ManageWeatherEffectsService.new(params[:row_type]).call
    if result
      render json: { status: 'success', message: 'Weather has been set' }, status: :ok
    else
      render json: { status: 'error', message: 'Failed to set weather.' }, status: :unprocessable_entity
    end
  end

  def manage_effect
    result = ManageRowEffectsService.new(@row, params[:effect], params[:isActive]).call
    if result
      render json: { status: 'success', message: 'Effects have been set' }, status: :ok
    else
      render json: { status: 'error', message: 'Failed to set effects.' }, status: :unprocessable_entity
    end
  end

  def set_row
    @row = Row.find(params[:id])
  end

  def row_params
    params.permit(:id, :effect, :row_type)
  end
end
