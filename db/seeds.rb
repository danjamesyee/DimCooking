# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Recipe.destroy_all

demo_user = User.create(username: 'demoman123', password: '123456')
gilbert_user = User.create(username: 'gilbert12', password: '1234566')

recipe1 = Recipe.create( 
    id: 1, 
    title: "Shrimp Dumplings(蝦餃)", 
    summary: "A simple Dim Sum classic. At dim sum houses, the server with the 
            steamed crystal shrimp dumplings, commonly known as “xia jiao” 
            or “har gow” in Cantonese, is always the most popular person on the floor. 
            I’ll even dare to stick my neck out and claim that har gow might be the #1 
            dim sum item of all time. At least, I wouldn’t be surprised if they were. 
            Whatever you do, don’t ask why it took me this long to post this recipe…
            Oh heck, if you insist…", 
    ingredients: "['1/2 pound raw shrimp, peeled', '1 teaspoon oyster sauce', 
        '1 tablespoon vegetable oil', '1/4 teaspoon white pepper', 
        '1 teaspoon sesame oil', '1/4 teaspoon salt']", 
    preparation: ['Mix everything (except the bamboo) together; whip in one 
        direction for a few minutes until the mixture starts to look sticky. 
        Now add the chopped bamboo shoots, and mix everything together. 
        Cover and refrigerate while preparing the dough.', 'Mix the wheat starch
        and cornstarch in a mixing bowl. Slowly add in the boiling water, 
        while stirring rapidly. Now add in the lard (or oil) and continue to stir. 
        Knead the dough for a couple of minutes, until it turns into a 
        smooth dough ball. Roll the dough into a long cylinder, and divide 
        it into 18 equal pieces. Cover the dough pieces with a damp paper towel.', 
        'Turn on the stove to pre-boil the water in the steamer. Take one piece 
        of dough and roll it into a 3” diameter circle. Add a spoonful of filling 
        and fold the dumpling as shown in our video. Continue assembling until all 
        the dumplings are made.', 'Once the water in the steamer is boiled, 
        steam the shrimp dumplings for 6 minutes using high heat and serve hot. 
        Make sure that they each have an inch and a half to expand during the cooking process.'], 
    author_id: User.find_by(username: 'gilbert12').id)

recipe1.photo.attach(io: File.open("/Users/danielyee/AppAcademy/dimcooking/app/assets/images/hargow.jpg"), filename: 'hargow.jpg')

