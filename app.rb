require 'rubygems'
require 'sinatra'
require 'mongo'
require 'json'

configure do
    set :env, 'development'
end

get '/' do
      haml :index, :attr_wrapper => '"', :locals => {:title => 'Woodpecker'}
end                                                                                                     
