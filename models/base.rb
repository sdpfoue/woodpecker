require 'yaml'
db = YAML.load_file(File.expand_path('config/dconfig/config.yml.sample
puts db.inspect
