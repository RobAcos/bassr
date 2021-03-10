class AuthController < ApplicationController
    #all logic involving auth
        def log_in
           user = User.find_by(username: params[:user][:username])
           if user && user.authenticate(params[:user][:password])
            render json: {user: user, token: JWT.encode({user_id: user.id}, "TexasDC")}
           else
            render json: {error: 'invalid name or password', status:505}
           end
        end
    
    end
    