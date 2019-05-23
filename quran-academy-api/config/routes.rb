Rails.application.routes.draw do
  scope '/api' do
    get 'students', to: 'students#index'
    get 'students/:id',  to: 'students#show'
    get 'students/edit/:id', to: 'students#edit'
    post 'students/:id',  to: 'students#update'
    get 'teachers', to: 'teachers#index'
    get 'teachers/:id',  to: 'teachers#show'

  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
