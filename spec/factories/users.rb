FactoryBot.define do
  factory :user do
      fist_name  { Faker::Name.first_name }
      last_name  { Faker::Name.last_name }
      login      " email@gmail.com "
      password   { Faker::Friends.character }
      city       { Faker::Friends.location }
  end
end
