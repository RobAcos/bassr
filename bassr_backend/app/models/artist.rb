class Artist < ApplicationRecord

    has_many :albums
    has_many :songs, through: :albums
    has_many :user_artists
    has_many :users, through: :user_artists 


end

