Rails.application.routes.draw do

 get '/virtualpet' => 'virtualpet#index'

 get '/fbird' => 'fbird#index'

 root 'welcome#index'
end
