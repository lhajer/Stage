class User < ApplicationRecord
    #has_one_attached :image
    validates: first_name, presence: true
    validates: first_name, presence: true
    validates: login, presence: true
end
