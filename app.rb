require 'rubygems'
require 'sinatra'
require 'mongo'
require 'json'
require 'sinatra/activerecord'
require './config/environments' 
require './models/feed.rb'


get '/' do
      haml :index, :attr_wrapper => '"', :locals => {:title => 'Woodpecker',
      }
end

post '/feed/?' do
    feed = Feed.new
    feed.url = params['feed']
    feed.save
end

get '/test/?' do
    hello world
end
