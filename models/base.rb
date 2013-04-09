require 'yaml'
db = YAML.load_file(File.expand_path('config/database.yml'))
puts db.inspect
