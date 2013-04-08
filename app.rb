require 'rubygems'
require 'sinatra'
require 'mongo'
require 'json'

get '/' do
      haml :index, :attr_wrapper => '"', :locals => {:title => 'Woodpecker'}
end                                                                                                     
