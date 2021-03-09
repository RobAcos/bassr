# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


# british_indie_rock = Genre.create(name: "British Indie Rock")
# post_punk = Genre.create(name: "Post Punk")

# bloc_party = Artist.create(name: "Bloc Party", img_url: "https://arcosmedia.cc/wp-content/uploads/2020/12/bloc.jpg", logo_url: "")
# boxer_rebellion = Artist.create(name: "Boxer Rebellion", img_url: "https://arcosmedia.cc/wp-content/uploads/2020/12/boxer.jpg", logo_url: "")
# the_bravery = Artist.create(name: "The Bravery", img_url: "https://arcosmedia.cc/wp-content/uploads/2020/12/brave.jpg", logo_url: "")



# sunday = Song.create(name: "Sunday", artist_id: bloc_party.id, genre_id: british_indie_rock.id, song_file: "https://arcosmedia.cc/wp-content/uploads/2020/12/sunday-bloc-party.mp3")
# diamonds = Song.create(name: "Diamonds", artist_id: boxer_rebellion.id, genre_id: british_indie_rock.id, song_file: "https://arcosmedia.cc/wp-content/uploads/2020/12/diamonds-boxer-rebellion.mp3")
# unconditional = Song.create(name: "Unconditional", artist_id: the_bravery.id, genre_id: post_punk.id, song_file: "https://arcosmedia.cc/wp-content/uploads/2020/12/unconditional-the-bravery.mp3")

User.destroy_all
Artist.destroy_all
Album.destroy_all
Song.destroy_all



User.create(
        name: "Bob",
        username: "bobby",
        password: "1234",
        user_pic_url: "empty")
User.create(
        name: "ross",
        username: "ross123",
        password: "1234",
        user_pic_url: "empty")

artist1 = Artist.create(
        name: "band1",
        genre: "genre1",
        profile_pic_url: "empty",
        banner_pic_url: "empty",
        favorites: 0)
artist2 = Artist.create(
        name: "band2",
        genre: "genre1",
        profile_pic_url: "empty",
        banner_pic_url: "empty",
        favorites: 0)
artist3 = Artist.create(
        name: "band3",
        genre: "genre1",
        profile_pic_url: "empty",
        banner_pic_url: "empty",
        favorites: 0)

album1 = Album.create(
        name: "album1",
        genre: "genre1",
        year: 1999,
        album_art_url: "empty",
        artist_id: artist1.id,
        favorites: 0)
album2 = Album.create(
        name: "album2",
        genre: "genre1",
        year: 2001,
        album_art_url: "empty",
        artist_id: artist1.id,
        favorites: 0)
album3 = Album.create(
        name: "album3",
        genre: "genre1",
        year: 2005,
        album_art_url: "empty",
        artist_id: artist2.id,
        favorites: 0)
album4 = Album.create(
        name: "album4",
        genre: "genre1",
        year: 1999,
        album_art_url: "empty",
        artist_id: artist3.id,
        favorites: 0)
song1 = Song.create(
        name: "monday",
        length: "1:41",
        tracklist: 1,
        song_url: "empty",
        genre: "genre1",
        album_id: album1.id,
        favorites: 0)
song2 = Song.create(
        name: "tuesday",
        length: "2:00",
        tracklist: 2,
        song_url: "empty",
        genre: "genre1",
        album_id: album1.id,
        favorites: 0)
song3 = Song.create(
        name: "wednesday",
        length: "5:00",
        tracklist: 3,
        song_url: "empty",
        genre: "genre1",
        album_id: album2.id,
        favorites: 0)