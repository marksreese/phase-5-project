class User < ApplicationRecord
    has_secure_password
    has_many :quizzes
    validates :username, presence: true
end
