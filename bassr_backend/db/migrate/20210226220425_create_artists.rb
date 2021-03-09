class CreateArtists < ActiveRecord::Migration[6.0]
  def change
    create_table :artists do |t|
      t.string :name
      t.string :genre
      t.string :profile_pic_url
      t.string :banner_pic_url
      t.integer :favorites


      t.timestamps
    end
  end
end
