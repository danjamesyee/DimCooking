@cookingnotes.each do |cookingnote|
    json.set! cookingnote.id do
        json.partial! "api/cookingnotes/cookingnote", cookingnote: cookingnote
        json.username cookingnote.user.username
    end
end