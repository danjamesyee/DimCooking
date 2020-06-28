@cookingnotes.each do |cookingnote|
    json.set! cookingnote.id do
        json.partial! "api/cookingnotes/cookingnote", cookingnote: cookingnote
    end
end