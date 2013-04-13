require 'digest/sha1'

class Feed < ActiveRecord::Base
    before_save :generate_url_hash

    def generate_url_hash
        self.name = 'tmp'
        self.hashed_url = Digest::SHA1.hexdigest self.url
    end

end
