FactoryBot.define do
  factory :ingredient do
    name      { Faker::Food.ingredient }  
    unit      "Kg"  
  end
end