class CreateSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :songs do |t|
      t.string :name
      t.string :length
      t.integer :tracklist
      t.string :song_url
      t.string :genre
      t.integer :favorites
      t.integer :album_id
      t.timestamps
    end
  end
end
