class Song < ApplicationRecord

    belongs_to :album
    has_many :user_songs
    has_many :users, through: :user_songs



end
