class User < ApplicationRecord
    has_secure_password

    has_many :quizzes
    #dependent: :destroy?
    validates :username, uniqueness: true
end
