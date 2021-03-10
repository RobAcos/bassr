class User < ApplicationRecord

    has_secure_password
    validates :username, uniqueness: true

    has_many :user_songs
    has_many :songs, through: :user_songs
    
    has_many :user_albums
    has_many :albums, through: :user_albums

    has_many :user_artists
    has_many :artists, through: :user_artists




end
