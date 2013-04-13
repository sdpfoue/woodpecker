#The environment variable DATABASE_URL should be in the following format:
## => postgres://{user}:{password}@{host}:{port}/path

configure :production, :development do
    set :environment, 'development'

    db = YAML.load_file(File.expand_path('database.yml','./config/'))
    db = db[settings.environment]

    ActiveRecord::Base.establish_connection(
        :adapter => db['adapter'],
        :host     => db['host'],
        :username => db['user'],
        :password => db['password'],
        :database => db['database'],
        :encoding => 'utf8',
    )
end
