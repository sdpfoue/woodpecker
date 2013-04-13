require 'rubygems'
require 'sinatra'
require 'mongo'
require 'json'
require 'sinatra/activerecord'
require './config/environments' 


get '/' do
      haml :index, :attr_wrapper => '"', :locals => {:title => 'Woodpecker'}
end                                                                                                     
get '/test/?' do
    hello world
end
