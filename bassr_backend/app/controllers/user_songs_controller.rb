class UserSongsController < ApplicationController
  before_action :set_user_song, only: [:show, :update, :destroy]

  # GET /user_songs
  def index
    @user_songs = UserSong.all

    render json: @user_songs
  end

  # GET /user_songs/1
  def show
    render json: @user_song
  end

  # POST /user_songs
  def create
    @user_song = UserSong.new(user_song_params)

    if @user_song.save
      render json: @user_song, status: :created, location: @user_song
    else
      render json: @user_song.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /user_songs/1
  def update
    if @user_song.update(user_song_params)
      render json: @user_song
    else
      render json: @user_song.errors, status: :unprocessable_entity
    end
  end

  # DELETE /user_songs/1
  def destroy
    @user_song.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_song
      @user_song = UserSong.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_song_params
      params.fetch(:user_song, {})
    end
end
