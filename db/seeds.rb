# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Recipe.destroy_all

demo_user = User.create(username: 'demoman123', password: '123456')
gilbert_user = User.create(username: 'gilbert12', password: '1234566')
daniel_user = User.create(username: 'thedaniel', password: 'password')




    recipe1 = Recipe.create( 
    
    idx: 0,
    title: "Shrimp Dumplings(蝦餃)", 
    summary: "A simple Dim Sum classic. At dim sum houses, the server with the 
            steamed crystal shrimp dumplings, commonly known as “xia jiao” 
            or “har gow” in Cantonese, is always the most popular person on the floor. 
            I’ll even dare to stick my neck out and claim that har gow might be the #1 
            dim sum item of all time. At least, I wouldn’t be surprised if they were. 
            Whatever you do, don’t ask why it took me this long to post this recipe…
            Oh heck, if you insist…", 
    ingredients: ['1/2 pound raw shrimp, peeled', '1 teaspoon oyster sauce', 
        '1 tablespoon vegetable oil', '1/4 teaspoon white pepper', 
        '1 teaspoon sesame oil', '1/4 teaspoon salt','1 teaspoon sugar',
        '1/2 teaspoon ginger (minced)','1/4 cup bamboo shoots (finely chopped)',
        '1 cup wheat starch', '1/2 cup cornstarch (or tapioca starch)', 
        '1 1/4 cups boiling water (add an additional 1 to 2 teaspoons in dryer climates)',
        '3 teaspoons lard (or oil)'], 
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
    author_id: User.find_by(username: 'gilbert12').id).photo.attach(io: open("https://dimcooking-dev.s3-us-west-1.amazonaws.com/11MEzq8JWVEYeX8kcWtyuQmB"), filename: 'hargow.jpeg')





recipe2 = Recipe.create(
    
    idx: 1,
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
    author_id: User.find_by(username: 'thedaniel').id).photo.attach(io: open("https://dimcooking-dev.s3-us-west-1.amazonaws.com/RecipeImages/nomaigai.jpg"), filename: 'nomaigai.jpg')

recipe3 = Recipe.create(
    
    idx: 2,
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
    ingredients: ['1 teaspoon active dry yeast', '3/4 cup warm water', 
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
    author_id: User.find_by(username: 'thedaniel').id).photo.attach(io: open("https://dimcooking-dev.s3-us-west-1.amazonaws.com/RecipeImages/chasiubau.jpeg"), filename: 'chasiubau.jpg')


recipe4 = Recipe.create(
    
    idx: 3,
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
        '1/2 teaspoon salt', '1/2 teaspoon sugar', 'white pepper (to taste)'],
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
    author_id: User.find_by(username: 'thedaniel').id).photo.attach(io: open("https://dimcooking-dev.s3-us-west-1.amazonaws.com/RecipeImages/lobakgo.jpg"), filename: 'lobakgo.jpg')



    
recipe5 = Recipe.create(
    
    idx: 4,
    title: 'Shu Mai(燒賣)',
    summary: 'If you are vaguely familiar with these steamed pork dumplings, 
        you may have noticed various spellings for them in English. 
        Siu mai is the Cantonese pronunciation. Cantonese-style siu mai 
        are the version that most people are familiar with. They’re round 
        and the filling is wrapped in circular dumpling skins. The filling 
        consists of pork and shrimp. Other additional ingredients may include 
        ginger, shiitake mushrooms, scallions, wood ear, and water chestnuts.',
    ingredients: ['1/2 pound 80% lean ground pork', 
        '1 1/2 tablespoons tapioca starch (can sub with cornstarch)', 
        '1/4 cup water', '1 1/2 tablespoons peanut oil (can sub with canola oil)',
        '1/2 tablespoon sesame oil', '1/2 pound shrimp', '1/2 cup chopped water chestnuts',
        '2/3 cup chopped shiitake mushrooms', '1 tablespoon minced ginger',
        '1/4 cup sliced scallions', '2 tablespoons oyster sauce', '1 teaspoon kosher salt',
        '1 teaspoon sugar', '1/2 teaspoon white pepper', 
        '25 to 30 thin round dumpling wrappers (preferably 3 1/4-inch diameter)'],
    preparation: ['Place the ground pork into a mixing bowl. Add the tapioca 
        starch and water to the bowl and start mixing everything together with a 
        wooden spoon. Keep stirring for several minutes until the pork starts to 
        turn into a paste-like consistency. This step helps to tenderize the ground 
        pork. You should hear squishing sounds as you stir the meat. Add the peanut 
        oil and sesame oil to the bowl and stir to incorporate. Set the bowl aside.',
        'Chop the shrimp into small 1/4-inch pieces and add them to the bowl with 
        the ground pork.', 'Add the chopped water chestnuts, shiitake mushrooms, 
        ginger, and scallions to the bowl with the pork and shrimp. Stir to combine. 
        Then, add the oyster sauce, salt, sugar, and white pepper. 
        Mix the ingredients until well incorporated.', 'If you are cooking the shumai immediately, 
        line a bamboo steamer with parchment paper. If you plan to freeze the dumplings, 
        line 1 or 2 large plates or a sheet pan with parchment paper.', 
        'Take one dumpling wrapper and place it on your left hand. 
        Place about 2 tablespoons of filling on the center of the wrapper. 
        Shift the wrapper and filling so that it is laying on top of the 
        crook of your left hand', 'Using a butter knife or spoon on your right hand, 
        start pressing the filling down into the gap formed by the crook of your left hand',
        'Use your left hand to squeeze the dumpling together. 
        I usually form an “o” shape with my thumb and pointer finger to help guide 
        the dumpling into a round shape. My dumplings are usually about 1 1/2 inches 
        in diameter. Use your ring finger to cradle the dumpling underneath.', 
        'Make sure to fill the dumpling all the way to the top. 
        You don’t want to see any excess dumpling wrapper on the top because 
        the dumplings will not look as nice when cooked.', 'Place the filled 
        dumpling on the counter and check to see if it stands upright without 
        leaning over. If the dumpling is leaning, use your fingers to straighten it. 
        Transfer the dumpling to your lined bamboo steamer or plate. 
        Continue filling and shaping the dumplings until you run out of the filling.', 
        'To cook the dumplings, cover the bamboo steamer with the lid. 
        Fill a wok with water. It should cover about 2 ½ inches from 
        the bottom of the wok. Bring the water to boil. Then, carefully place 
        the covered bamboo steamer directly over the boiling water. 
        Let the dumplings cook for 7 to 8 minutes. You can stick a thermometer 
        into a dumpling to see if the meat has reached 165ºF. Remove the steamer 
        basket from the wok and serve.'],
    author_id: User.find_by(username: 'thedaniel').id).photo.attach(io: open("https://dimcooking-dev.s3-us-west-1.amazonaws.com/RecipeImages/siumai.jpeg"), filename: 'siumai.jpg')

recipe6 = Recipe.create(
    
    idx: 5,
    title: 'Teochew Dumpling(潮州粉粿)',
    summary: 'This popular Chinese dim-sum, Teochew dumplings can be made at home. 
        Best of all, it\'s healthier. Make more in advance, then you can enjoy 
        whenever you crave for some. If I make my own dumplings, 
        I can choose any ingredients I like. The taste is tailor-made and 
        surely suits my personal preference. I don’t use lard, so it’s much healthier. 
        You can make as many as you like, then keep them in freezer for up to 3 months. 
        When you crave for some, just steam them in a wok. 
        They are served as a perfect Chinese breakfast or afternoon tea. 
        What a bliss having dim sum enjoyed at home.',
    ingredients: ['150 gm pork mince', '10 gm dried shrimps, soaked and finely chopped',
        '15 gm shiitake mushrooms, soaked and finely chopped', '15 gm sweetened 
        preserved radish, soaked in salted water and finely chopped', '125 gm yam bean, peeled and diced', 
        '75 gm chives, finely chopped', '1/2 cup chopped coriander, finely chopped',
        '30 gm roast peanuts, reserve for wrapping in the last minute', '1/2 tsp light soy sauce',
        '1/2 tsp sugar', '160 gm wheat starch', '50 gm potato starch', '⅛ tsp salt', 
        '1/2 tsp sugar', '500 ml boiling water', '200 gm tapioca flour', '2 tsp oil'],
    preparation: ['Mix the pork with marinade. Set aside for about 30 minutes. 
        Heat oil in a wok over medium-high heat. Stir fry the pork until cooked. Set aside.',
        'Add some oil in the wok. Saute the dried shrimps, shiitake mushrooms and 
        preserved radish. Add yam bean. Stir to combine. Toss back the pork mince. 
        Pour in the seasonings. Cook for 3 minutes with cover. Stir in chives and 
        coriander. Add thickening. Set aside. (Remark: Mix in the peanuts in the 
        last minute in order to keep the crunchiness.)', 'Sieve the wheat starch, 
        potato starch, salt and sugar into a large mixing bowl. Pour in the boiling 
        water. Quickly stir the mixture with a pair of chopsticks into a paste. 
        The paste is quite sticky at this stage.', 'Turn the paste into tapioca 
        flour on a clean surface. Knead into a smooth, non-sticky dough. 
        Continue to knead in the oil bit by bit. Roll it into a round shape.', 
        'Roll out the dough into a long tube. Cut into equal portion, each 20 grams. 
        Roll each portion into a small ball and flatten with your palm. With a 
        rolling pin, roll into a 8cm/3inch-diameter disc. Scope a heaped teaspoon 
        of filling. (Remember to add the peanuts.) Fold the wrapper in half and seal 
        the edges.（Note: Cover the rest of the dough portions with a cloth while wrapping.）
        Repeat this step to finish wrapping the filling.', 'Line a baking paper in a steamer. 
        Steam dumplings over high heat for about 8 to 10 minutes. Serve immediately with soy sauce and chilli sauce.'],
    author_id: User.find_by(username: 'thedaniel').id).photo.attach(io: open("https://dimcooking-dev.s3-us-west-1.amazonaws.com/RecipeImages/teochew.jpeg"), filename: 'teochew.jpg')



    
recipe7 = Recipe.create(
    
    idx: 6,
    title: 'Egg Tart(蛋撻)',
    summary: 'The egg tart started being sold in the early 20th century in 
        Guangzhou, Guangdong province, inspired by the pastel de nata, 
        which was already famous in England, and the English custard tart. 
        Guangzhou\'s status as the only port accessible to foreign traders 
        led to the development of Cantonese cuisine having many outside influences.
        As Guangzhou\'s economy grew from trade and interaction with Britain, 
        pastry chefs at the Western-style department stores in the city were 
        asked to invent new pastries weekly to attract customers from competitors. 
        The egg tart, featuring a lard-based puff pastry crust and a filling similar 
        to steamed egg pudding (燉蛋), was invented by a department store for one of these 
        "Weekly Special" competitions. The Zhen Guang Restaurant in Guangzhou 
        is also credited with inventing the Chinese egg tart.',
    ingredients: ['1 and 1/2 cups all purpose flour', 'A pinch of salt', '1/2 cup sugar, 
        diluted in 1 cup/250ml hot water', '1 tablespoon sugar', 
        '14 tablespoons unsalted butter', '2 tablespoons cold water', '3 eggs',
        '1/2 cup evaporated milk', '1 teaspoon vanilla essence'],
    preparation: ['In a large bowl, add the flour, salt, and 1 tablespoon of sugar. 
        Mix in butter with a fork until it is in small crumbs. 
        Add 2 tablespoons of cold water (or a little more) to bring the dough 
        together. Cover the dough and refrigerate for 20 minutes.', 'Place the 
        dough onto a lightly floured working surface. Slightly knead and roll 
        the dough with a rolling pin to form an 8 x 20 inch (20x50cm) rectangle.', 
        'Fold the top third of the dough down to the center, then the bottom 
        third up and over the remaining dough to form a square. Give the dough 
        a quarter turn and roll out the dough again to obtain a rectangle. 
        Fold the same way as in the prior step. Cover, and refrigerate for 30 minutes.',
        'Whisk the eggs and evaporated milk. Then incorporate the sugar water, 
        vanilla and continue to whisk. Strain the mixture through a fine sieve.', 
        'Preheat oven to 400F/200C', 'Roll out the dough to a thickness of about 
        1/4 inch (5mm). Cut circles the size of your tart molds. Press the dough 
        into the molds all the way up to the edges. Place the tart molds on a 
        baking sheet.', 'Fill each empty pastry shell almost to the top. 
        Transfer the baking sheet to the oven and bake for 15 minutes.', 'Then, 
        reduce the temperature to 350F/180C, and bake for another 12 minutes, 
        until the custard is set. Leave the oven door ajar for 5 more minutes 
        before removing the egg tarts from the oven.'],
    author_id: User.find_by(username: 'thedaniel').id).photo.attach(io: open("https://dimcooking-dev.s3-us-west-1.amazonaws.com/RecipeImages/dantat.jpeg"), filename: 'dantat.jpg')


recipe8 = Recipe.create(
    
    idx: 7,
    title: 'Cheung Fun(腸粉)',
    summary: 'Cheung fun (Cantonese steamed rice noodles) is one of my 
        favorite breakfast dishes. You may find lots of sub-versions if 
        you visit Guangdong province. With similar methods, people use different 
        flour mixture and water ration to adjust the thickness, 
        transparence and elasticity of Cheung fun.',
    ingredients: ['1 cup rice flour', '1/3 cup corn starch', '50 g wheat starch', 
        '500 ml water', 'a tiny pinch of salt', '1 tbsp. vegetable oil', 
        '1/2 cup chopped shrimp', '1/3 cup chopped green onion', 
        '1/2 tbsp. oyster sauce', '1/2 tbsp. dark soy sauce', '2 tbsp. light soy sauce',
        '2 tbsp. water', '1 tsp. rock sugar', '1/2 tbsp. sesame oil'],
    preparation: ['In a large bowl, mix rice flour, cornstarch, wheat starch, 
        salt oil and water. Stir well to make sure the batter is well mixed. 
        Set aside for 10 minutes.', 'Prepare a rectangle or square pan and a 
        large wok that can hold the pan. Bring enough water to a boiling and 
        then place your pan in.', 'In a small bowl, pour a small amount of oil 
        and then brush the steaming pan with a very very thin layer of oil and 
        then pour the batter in. (I pour around 3 tablespoons of batter each 
        time and it should spread to form a very thin layer at the bottom). 
        Make it even and then steam for 1 minute until the batter firms, 
        then sprinkle shrimp and green onions. Re-steam for 2 minutes over 
        high fire.', 'Transfer out, use a knife to separate the edges from the 
        pan firstly and then roll it up to a 2-3cm wide tube. If you prefer, 
        you can cut the tube into one-bite size sections.', 'In a saucepan, 
        add all the ingredients expect sesame oil and heat to boil. Then turn 
        down the heat and let it simmer for 3-5 minutes. Add sesame oil and 
        transfer out to cool down.'],
    author_id: User.find_by(username: 'thedaniel').id).photo.attach(io: open("https://dimcooking-dev.s3-us-west-1.amazonaws.com/RecipeImages/cheungfun.jpg"), filename: 'cheungfun.jpg')


recipe9 = Recipe.create(
    
    idx: 8,
    title: 'Deep Fried Taro Dumpling Puffs(芋角)',
    summary: 'Crispy taro puffs, or "wu gok" as they\'re known in 
        Cantonese, are also sometimes referred to as "phoenix tail 
        crispy dumplings". At traditional dim sum restaurants, the chef 
        may sometimes cover the wu gok in phoenix tail shrimp, which is 
        where this name comes from. Remember that it cannot be too crispy, 
        so as to ensure its phoenix lifelike quality.',
    ingredients: ['1.32 pounds (600 grams) peeled taro', 
        '2/3 cup (150 grams) boiling water','2 teaspoons five-spice powder', 
        '2 teaspoons (8 grams) chicken bouillon', 
        '1 and 1/4 cups (150 grams) wheat flour', '5.29 ounces (150 grams) lard', 
        '1 teaspoon (4 grams) salt', '2 salted hardboiled egg yolk', 
        '5.29 ounces (150 grams) white mushroom, blanched and diced', 
        '1.32 pounds (600 grams) diced chicken, blanched', '10.58 ounces (300 grams) diced shrimp, blanched',
        '5.29 ounces (150 grams) diced dried shiitake mushrooms, blanched',
        '4 teaspoons (19 grams) crushed garlic', '4 teaspoons (19 grams) dried crushed onion', 
        '6 eggs, beaten', '2 teaspoons (8 grams) salt', '3 teaspoons (15 grams) chicken bouillon', 
        '2 tablespoons (23 grams) sugar', '1 tablespoon light soy sauce', '2 tablespoons oyster sauce', 
        '2 and 1/2 cups (600 grams) stock', '1 teaspoon ground pepper', '1 and 2/3 tablespoons (23 grams) sesame oil', 
        '6 tablespoons (57 grams) potato starch', '1/3 cup (75 grams) water'],
    preparation: ['Heat oil in pot. Fry crushed garlic and dried crushed onion 
    until fragrant. Add all filling ingredients (aside from the eggs), 
        and fry until fragrant. Sprinkle a dash of cooking wine. Add seasoning 
        ingredients and bring to a boil. Add potato starch and water until it 
        achieves a thick consistency. Fry egg yolk. Scoop out and let cool.', 
        'Use boiling water to knead wheat flour into dough. Chop peeled taro 
        into slices. Place into steamer basket and steam over high heat 20 minutes. 
        Crush. Add salt, chicken bouillon, five-spice powder, and the wheat flour 
        dough. Stir evenly. Then add salted hardboiled egg yolks and lard. Stir 
        thoroughly. Refrigerate for 30 minutes. This is the taro skin.', 
        'Separate taro skin into small circular wraps approximately 0.81 ounce 
        (23 grams) each. Add about 0.81 ounce (23 grams) of filling to these and 
        form into a dumpling shape, thus making the wu gok ready to be cooked.', 
        'Heat oil to 392 °F (200 °C). Add wu gok. Fry until golden brown and crispy. 
        Remove from pot and strain away excess oil.'],
    author_id: User.find_by(username: 'thedaniel').id).photo.attach(io: open("https://dimcooking-dev.s3-us-west-1.amazonaws.com/RecipeImages/wugok.jpeg"), filename: 'wugok.jpeg')



    

