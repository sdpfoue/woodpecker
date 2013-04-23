class String
    def camelize
        self.split(/[^a-z0-9]/i).map{ |w| w.capitalize}.join
    end
    def classify
        self.split('/').map{ |w| w.camelize }.join('::')
    end
end

module SinatraAutoload
    @@root_path = nil

    def self.root_path
        @@root_path
    end

    def self.root_path=(path)
        @@root_path = path
    end

    def self.directories(*args)
        return unless args
        args.each do |file_path|
            Dir[ File.join( @@root_path, file_path, '/**/*.rb') ].each do |file|
                #autoload File.basename(file, '.rb').classify.to_sym, file
                require file
            end
        end
    end

end
