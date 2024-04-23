Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post 'rows/set_weather', to: 'rows#set_weather'
      post 'rows/:id/set_effect', to: 'rows#set_effect'

      resources :cards
      resources :games, only: %i[show create update] do
        member do
          post 'reset_game'
        end
      end
      resources :players, only: [] do
        member do
          post 'joined_game'
          post 'change_leader_ability_status'
        end
      end
    end
  end

  get 'up' => 'rails/health#show', as: :rails_health_check

  root to: 'api/v1/games#show'
end
