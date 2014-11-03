# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Prediction.delete_all

Prediction.create([
  {body: "There will be no jobs for humans.", upvotes: 1, downvotes: 17},
  {body: "Everyone will take work sabbaticals.", upvotes: 5, downvotes: 5},
  {body: "Everyone from WDI2 will get an awesome job.", upvotes: 152, downvotes: 0},
  {body: "Sal will post a meme to hipchat.", upvotes: 18, downvotes: 5},
  {body: "Mikael will initiate a single clap.", upvotes: 1, downvotes: 0}
])