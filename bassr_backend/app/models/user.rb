class User < ApplicationRecord

    has_many :user_songs
    has_many :songs, through: :user_songs
    
    has_many :user_albums
    has_many :albums, through: :user_albums

    has_many :user_artists
    has_many :artists, through: :user_artists




end
