class Api::CookingnotesController < ApplicationController

    # before_action :require_logged_in, only: [:create, :update, :destroy]

    def index
        @cookingnotes = CookingNote.all
        render :index
    end

    def create
        @cookingnote = CookingNote.new(note_params)
        @cookingnote.author_id = current_user.id
        if @cookingnote.save
            render :show
        else
            render json: ['Note not created, try again!'], status: 400
        end
    end

    def show
        @cookingnote = CookingNote.find(params[:id])
        render :show
    end

    def update
        @cookingnote = CookingNote.find(params[:id])
        if @cookingnote.update(note_params)
            render :show
        else
            render json: @cookingnote.errors.full_messages, status: 400
        end
    end

    def destroy
        @cookingnote = CookingNote.find(params[:id])
        @cookingnote.destroy if @cookingnote
            
        render :show
    end

    

    def note_params
        params.require(:cookingnote).permit(:body, :recipe_id)
    end
end
