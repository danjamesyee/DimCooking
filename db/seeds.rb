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

recipe1 = Recipe.create( id: 1, title: "Shrimp Dumplings(蝦餃)", summary: "A simple Dim Sum classic", ingredients: "['1/2 pound raw shrimp, peeled']", preparation: 'Eat it', author_id: User.find_by(username: 'gilbert12').id)

recipe1.photo.attach(io: File.open("/Users/danielyee/AppAcademy/dimcooking/app/assets/images/hargow.jpg"), filename: 'hargow.jpg')

