class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
    end

    private

    def user_params
        params.require(:user).permit(:username, :password, :first_name, :last_name, :email)
    end
end
