# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


comment1=Comment.create({content:'heyyyyy'})
comment2=Comment.create({content: Faker::Lorem.sentence })

recipe1=Recipe.create({description: Faker::Lorem.sentence
                       title: Faker::Food.dish,
                       direction:Faker::Food.description
                       prep_time: 30,
                         })

recipe2=Recipe.create({description: Faker::Lorem.sentence
                         title: Faker::Food.dish,
                         direction:Faker::Food.description
                         prep_time: 20,
                           })