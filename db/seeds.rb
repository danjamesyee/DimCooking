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
daniel_user = User.create(username: 'thedaniel', password: 'password')

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

recipe2 = Recipe.create(
    id: 2,
    title: "Sticky Rice Lotus Leaf Wraps(糯米雞)",
    summary: "Every time our cousins visit from Buffalo, we have dim sum on the
        last day of their visit, and we  ogle the seating host have a lovely meal 
        before they head home. There are so many awesome little things that we always
        order, and Lo Mai Gai (cantonese), or steamed sticky rice…lotus…leaf…chicken…thingies
        (I really actually have no idea what they’re supposed to be called in English, 
        hence the incredibly long name of this post) is one of them.This dim sum sticky 
        rice making stuff does take some time, 
        but you can make a big batch of these wraps, steam them, and freeze them for later. 
        Another tip: you don’t actually have to use lotus leaves. If you can get them, 
        definitely use them. They add an interesting flavor to the rice as it steams. 
        But we discovered that parchment paper also works really well for this.",
    ingredients: ['2 tablespoon light soy sauce', '1/2 teaspoon ground white pepper', 
        '1 tablespoon oyster sauce', '1/2 teaspoon five-spice powder', '1 tablespoon ginger (very finely chopped)',
        '1 tablespoon Shaoxing wine', '1 teaspoon cornstarch', '4 boneless skinless chicken thighs (cut into small chunks)', 
        '4 cups sticky rice (sweet rice)', '2 tablespoons dark soy sauce'],
    preparation: ['In a medium bowl, stir together the marinade ingredients and 
        add the chicken pieces. Stir well and refrigerate. Soak the sticky rice for 
        2 hours, drain, and mix with 2 tablespoons dark soy sauce. Set aside.', 
        'Over high heat, add 2 tablespoons oil to your wok. When the wok is smoking 
        slightly, add half the mushrooms and stir-fry until they’re browned, tender, 
        and most of the moisture has evaporated. Remove from the wok and set aside. 
        Do the same with the second half of the mushrooms. 
        (Cooking the mushrooms in 2 batches prevents them from getting soggy). 
        Set all the mushrooms aside.', 'Heat your wok over high heat again with 
        a couple tablespoons oil. Brown the chicken. Mix in the mushrooms, 
        scallions, and salt. Stir-fry for a couple minutes to let the flavors 
        meld together.', 'Mix this chicken mixture with the soaked rice. 
        Now you’re ready to wrap them in the lotus leaves. Brush a small section 
        on one end of each leaf lightly with oil. Put about ¾ cup of the mixture  
        on the oiled area. Wrap each into a rectangle, tie with kitchen string, 
        and steam for about 90 minutes.', 'You can serve with a little chili oil 
        or allow them to cool, place into freezer bags, and freeze for later! 
        When you’re ready to eat them, just steam them right out of the freezer 
        for about 30 minutes.'],
    author_id: User.find_by(username: 'thedaniel').id)


recipe2.photo.attach(io: File.open("/Users/danielyee/AppAcademy/dimcooking/app/assets/images/nomaigai.jpg"), filename: 'nomaigai.jpg')

recipe3 = Recipe.create(
    id: 3,
    title: "Steamed BBQ Pork Buns(叉烧包)",
    summary: "Our baked cha siu bao is to this day one of the recipes that 
        consistently stays at the top of our “most popular” list––a 
        strong indication of just how much people love these tasty BBQ 
        pork buns but you must try these steamed bbq pork buns. 
        For this reason, steamed BBQ pork buns or Char Siu Bao, also called 
        steamed roast pork buns have been on our to-do list for a long, long 
        time. We’ve had lots of questions from readers on how to make steamed 
        buns, and for good reason. This great variation is a super star on dim 
        sum tables, enjoyed by people of all ages.",
    ingredients: ['1 teaspoon active dry yeast', '¾ cup warm water', 
        '2 cups all-purpose flour', '1 cup cornstarch', '5 tablespoons sugar',
        '1/4 cup canola or vegetable oil', '2 1/2 teaspoons baking powder', 
        '1 tablespoon oil', '1/3 cup shallots or red onion (finely chopped)', 
        '1 tablespoon sugar', '1 tablespoon light soy sauce', '1 1/2 tablespoons oyster sauce'],
    preparation: ['In the bowl of an electric mixer fitted with a dough hook 
        attachment (you can also just use a regular mixing bowl and knead by hand), 
        dissolve the yeast in the warm water. Sift together the flour and cornstarch, 
        and add it to the yeast mixture along with the sugar and oil. Turn on 
        the mixer to the lowest setting and let it go until a smooth dough ball is formed. 
        Cover with a damp cloth and let it rest for 2 hours. 
        (I haven\'t forgotten about the baking powder. You\'ll add that later!)',
        'While the dough is resting, make the meat filling. 
        Heat the oil in a wok over medium high heat. Add the onion and stir-fry
        for a minute. Turn heat down to medium-low, and add the sugar, soy sauce, 
        oyster sauce, sesame oil, and dark soy. Stir and cook until the mixture 
        starts to bubble up. Add the chicken stock and flour, cooking for a 
        couple minutes until thickened. Remove from the heat and stir in the 
        roast pork. Set aside to cool. If you make the filling ahead of time, 
        cover and refrigerate to prevent it from drying out.', 
        'After your dough has rested for 2 hours, add the baking powder to the 
        dough and turn the mixer on to the lowest setting. At this point, 
        if the dough looks dry or you\'re having trouble incorporating the 
        baking powder, add 1-2 teaspoons water. Gently knead the dough 
        until it becomes smooth again. Cover with a damp cloth and let it 
        rest for another 15 minutes. In the meantime, get a large piece 
        of parchment paper and cut it into ten 4x4 inch squares. 
        Prepare your steamer by bringing the water to a boil.', 
        'Now we are ready to assemble the buns: roll the dough into a 
        long tube and divide it into 10 equal pieces. Press each piece of 
        dough into a disc about 4 1/2 inches in diameter (it should be thicker 
        in the center and thinner around the edges). Add some filling and pleat 
        the buns until they\'re closed on top.','Place each bun on a parchment 
        paper square, and steam. I steamed the buns in two separate batches 
        using a bamboo steamer (be sure the boiling water does not touch the 
        buns during steaming process). Once the water boils, place the buns in 
        the steamer and steam each batch for 12 minutes over high heat.'],
    author_id: User.find_by(username: 'thedaniel').id)


recipe3.photo.attach(io: File.open("/Users/danielyee/AppAcademy/dimcooking/app/assets/images/chasiubau.jpeg"), filename: 'chasiubau.jpg')


recipe4 = Recipe.create(
    id: 4,
    title: 'Turnip Cake(蘿蔔糕)',
    summary: 'This savory turnip cake (sometimes called radish) lo bak go is a 
        very traditional dish often served at dim sum houses, and when I was a kid, 
        it always showed up on the table on Chinese New Year’s Day. As a result, 
        it’s been etched in my mind as a wonderfully delicious tradition.',
    ingredients: ['1 daikon radish (about 20 oz., grated)', '1 to 1 1/2 cups water', 
        '1 tablespoon dried shrimp (washed, soaked and chopped)', 
        '3-5 dried shiitake mushrooms (washed, soaked, and chopped)', 
        '1 Chinese sausage (diced)', '1 scallion (chopped)', 
        '1 1/4 cups rice flour (130 grams)', '1 tablespoon cornstarch (8 grams)',
        '½ teaspoon salt', '½ teaspoon sugar', 'white pepper (to taste)'],
    preparation: ['Add the grated turnip and 1 cup water to a wok or large pan, 
        and bring to a simmer. Simmer for about 10 minutes, stirring occasionally 
        so the turnip does not brown. The turnip will produce liquid, 
        some of which will evaporate. You will have liquid left in the wok 
        with the radish that you will also use. Scoop the cooked turnip 
        into a large mixing bowl to cool. Pour any remaining liquid in the 
        wok into a measuring cup, and add water until you have a total of 
        1 cup of liquid. Add it to the mixing bowl with the cooked turnip.', 
        'Clean your wok or pan and place it over medium heat. 
        Add a couple tablespoons oil. Add the shrimp, mushrooms, 
        and sausage, and cook for about 5 minutes. Stir in the chopped 
        scallion and remove from the heat to cool.', 'Add rice flour, cornstarch, 
        salt, sugar, and white pepper to the mixing bowl with the radish and cooking 
        liquid. Mix well until the dry ingredients are well-incorporated. 
        Add in the cooked shrimp, mushrooms and sausage, and be sure to scrape the oil 
        from the pan into the batter. Mix well and let sit for 15 minutes.', 
        'Give the batter a final stir, and pour it into a well-oiled loaf pan. 
        Place the pan into a steamer with plenty of water and steam over 
        medium-high heat for 50 minutes.', 'Remove the pan from the steamer 
        and let your turnip cake set for about 30 minutes. Once cooled, 
        loosen the sides with a spatula and turn it out onto a cutting board. 
        It should come out quite easily.', 'Use a sharp knife dipped in water 
        to slice ½-inch thick pieces. I know people who’d enjoy it just like that, 
        but most people pan-fry the turnip cake first. Add a couple tablespoons 
        oil to a non-stick or seasoned cast iron pan over medium heat. 
        Fry the cakes on both sides until golden and crispy. Serve with oyster sauce!'],
    author_id: User.find_by(username: 'thedaniel').id)

recipe4.photo.attach(io: File.open("/Users/danielyee/AppAcademy/dimcooking/app/assets/images/lobakgo.jpg"), filename: 'chasiubau.jpg')
