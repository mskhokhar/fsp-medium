# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
require 'faker'
User.destroy_all
Category.destroy_all
Post.destroy_all
Like.destroy_all

guest_user = User.create!({
    username: 'guest_user',
    password: '123456',
    first_name: 'Guest',
    last_name: 'User' ,
    email: 'guest_user@io.com'
})
demo_user = User.create!({
    username: 'starwars_01',
    password: '123456',
    first_name: 'Star',
    last_name: 'Wars' ,
    email: 'starwars_01@io.com'
})
user_ 1= User.create!({
    username: Faker::Internet.username,
    password: '123456',
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name ,
    email: Faker::Internet.email
})
user_ 2= User.create!({
    username: Faker::Internet.username,
    password: '123456',
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name ,
    email: Faker::Internet.email
})
user_3 = User.create!({
    username: Faker::Internet.username,
    password: '123456',
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name ,
    email: Faker::Internet.email
})
user_4 = User.create!({
    username: Faker::Internet.username,
    password: '123456',
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name ,
    email: Faker::Internet.email
})
user_5 = User.create!({
    username: Faker::Internet.username,
    password: '123456',
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name ,
    email: Faker::Internet.email
})

business = Category.create!({
    name: 'Business',
    subtitle: 'all about Business'
})
education = Category.create!({
    name: 'Education',
    subtitle: 'all about Education'
})
food = Category.create!({
    name: 'Food',
    subtitle: 'all about Food'
})
health = Category.create!({
    name: 'Health',
    subtitle: 'all about Health'
})
lgbt = Category.create!({
    name: 'LGBTQIAA',
    subtitle: 'all about LGBTQIAA'
})
psychology = Category.create!({
    name: 'Psychology',
    subtitle: 'all about Psychology'
})
relationships = Category.create!({
    name: 'Relationships',
    subtitle: 'all about Relationships'
})
technology = Category.create!({
    name: 'Technology',
    subtitle: 'all about Technology'
})
work = Category.create!({
    name: 'Work',
    subtitle: 'all about Work'
})


