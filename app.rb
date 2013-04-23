require 'rubygems'
require 'sinatra'
require 'mongo'
require 'json'
require 'sinatra/activerecord'
require './config/environments' 
require './autoload.rb'

SinatraAutoload.root_path = Dir.pwd;
SinatraAutoload.directories('models');

get '/' do
      @title = 'Woodpecker'
      haml :index
end

post '/feed/?' do
    feed = Feed.new
    feed.url = params['feed']
    begin
        feed.save
    rescue ActiveRecord::RecordNotUnique
        'record duplicated'
    end
end

get '/test/?' do
    hello world
end
