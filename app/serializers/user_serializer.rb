class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :tokens, :nfts
end
