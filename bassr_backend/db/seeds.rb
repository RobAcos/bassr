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
        password: "Abc123",
        user_pic_url: "empty",
        password_confirmation: "Abc123")
User.create(
        name: "ross",
        username: "ross123",
        password: "Abc123",
        user_pic_url: "empty",
        password_confirmation: "Abc123")

boxer = Artist.create(
        name: "Boxer Rebellion",
        genre: "Rock",
        profile_pic_url: "empty",
        banner_pic_url: "empty",
        favorites: 0)
caifanes = Artist.create(
        name: "Caifanes",
        genre: "Rock",
        profile_pic_url: "empty",
        banner_pic_url: "empty",
        favorites: 0)
robthomas = Artist.create(
        name: "Rob Thomas",
        genre: "Smooth",
        profile_pic_url: "empty",
        banner_pic_url: "empty",
        favorites: 0)

promises = Album.create(
        name: "Promises",
        genre: "Rock",
        year: 2013,
        album_art_url: "https://m.media-amazon.com/images/I/81zbx5XCMzL._SS500_.jpg",
        artist_id: boxer.id,
        favorites: 0)
diablito = Album.create(
        name: "El Diablito",
        genre: "rock",
        year: 1990,
        album_art_url: "https://lastfm.freetls.fastly.net/i/u/ar0/426f2893eccac07c938c547141384ffb.jpg",
        artist_id: caifanes.id,
        favorites: 0)
littlewonders = Album.create(
        name: "Little Wonders",
        genre: "Smooth",
        year: 2007,
        album_art_url: "https://pbs.twimg.com/profile_images/1095186612437188609/zQCnsPPe.jpg",
        artist_id: robthomas.id,
        favorites: 0)

song1 = Song.create(
        name: "Keep Moving",
        length: "4:03",
        tracklist: 6,
        song_url: "http://arcos-platform.site/wp-content/uploads/2021/03/keep-moving-boxer-rebellion.mp3",
        album_url: "https://m.media-amazon.com/images/I/81zbx5XCMzL._SS500_.jpg",
        genre: "rock",
        album_id: promises.id,
        favorites: 0)
song2 = Song.create(
        name: "La Celula Que Explota",
        length: "3:36",
        tracklist: 7,
        song_url: "http://arcos-platform.site/wp-content/uploads/2021/03/la-celula-que-explota-caifanes.mp3",
        album_url: "https://lastfm.freetls.fastly.net/i/u/ar0/426f2893eccac07c938c547141384ffb.jpg",
        genre: "Rock",
        album_id: diablito.id,
        favorites: 0)
song3 = Song.create(
        name: "Little Wonders",
        length: "3:45",
        tracklist: 1,
        song_url: "http://arcos-platform.site/wp-content/uploads/2021/03/Little-Wonders-Rob-Thomas.mp3",
        genre: "Smooth",
        album_url: "https://pbs.twimg.com/profile_images/1095186612437188609/zQCnsPPe.jpg",
        album_id: littlewonders.id,
        favorites: 0)