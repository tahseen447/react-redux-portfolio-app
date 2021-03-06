Rails.application.routes.draw do
  scope '/api' do
    get 'students', to: 'students#index'
    get 'students/:id',  to: 'students#show'
    put 'students/:id',  to: 'students#update'
    get 'teachers', to: 'teachers#index'
    get 'teachers/:id',  to: 'teachers#show'
    post 'teachers/',  to: 'teachers#create'

  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
