class CreateAlbums < ActiveRecord::Migration[6.0]
  def change
    create_table :albums do |t|
      t.string :name
      t.string :genre
      t.integer :year
      t.string :album_art_url
      t.integer :favorites
      t.integer :artist_id


      t.timestamps
    end
  end
end
