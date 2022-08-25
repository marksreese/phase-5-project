# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "clearing database"
Quiz.destroy_all
QuizQuestion.destroy_all
Question.destroy_all
puts "seeding questions"
Question.create(text: "What is Connie's master's degree in?", 
    answer_one: "Biology", 
    answer_two: "Education", 
    answer_three: "History", 
    answer_four: "Engineering", 
    correct: 2)
Question.create(text: "What is Ikmann's favorite slang term?", 
    answer_one: "Yezzir", 
    answer_two: "Drip", 
    answer_three: "Bet", 
    answer_four: "Cap", 
    correct: 1)
Question.create(text: "What is Harrison's favorite sport?", 
    answer_one: "Golf", 
    answer_two: "Football", 
    answer_three: "Disc golf", 
    answer_four: "Curling", 
    correct: 3)
Question.create(text: "What is Erik's favorite type of hat?", 
    answer_one: "Cowboy hat", 
    answer_two: "Baseball cap", 
    answer_three: "Fedora", 
    answer_four: "Bucket hat", 
    correct: 1)
Question.create(text: "What is Emiley's favorite food?", 
    answer_one: "Mashed potatoes", 
    answer_two: "Home fries", 
    answer_three: "Potato Dauphinoise", 
    answer_four: "All the above", 
    correct: 4)
Question.create(text: "From which country did Kiran move to Colorado?", 
    answer_one: "UAE", 
    answer_two: "South Africa", 
    answer_three: "Nigeria", 
    answer_four: "India", 
    correct: 2)
Question.create(text: "Who is Lior's celebrity doppelgänger?", 
    answer_one: "Kenny G", 
    answer_two: "Weird Al", 
    answer_three: "Jason Momoa", 
    answer_four: "Do you mean, \"Why do all these celebrities model their signature look after Lior?\"", 
    correct: 4)
Question.create(text: "Which kind of cheese does Lucas eat for breakfast every day?", 
    answer_one: "Aged sharp cheddar", 
    answer_two: "Smoked Gouda", 
    answer_three: "Monterey Jack", 
    answer_four: "Pepper Havarti", 
    correct: 1)
Question.create(text: "What is Samantha's favorite drink?", 
    answer_one: "Sugar cane juice", 
    answer_two: "Green tea with grass jelly", 
    answer_three: "Philz mint mojito", 
    answer_four: "Original Green Monster energy", 
    correct: 3)
Question.create(text: "Which Mark is Shane's favorite Mark and why is it Mark?", 
    answer_one: "Mark Hamill", 
    answer_two: "Mark Wahlberg", 
    answer_three: "Mark Ruffalo", 
    answer_four: "Mark Reese, because of their eternal love for each other", 
    correct: 4)
Question.create(text: "Which university does Terrence currently attend?", 
    answer_one: "UNC-Chapel Hill", 
    answer_two: "Duke", 
    answer_three: "UC Berkeley", 
    answer_four: "UCLA", 
    correct: 2)
Question.create(text: "How many children does Thomas have?", 
    answer_one: "1", 
    answer_two: "2", 
    answer_three: "3", 
    answer_four: "None, his glorious beard is his baby", 
    correct: 2)
Question.create(text: "Which is Yifan's favorite part of a PhD program?", 
    answer_one: "Applying", 
    answer_two: "Quals", 
    answer_three: "TA'ing", 
    answer_four: "Doing a bootcamp in the summer", 
    correct: 4)
    Question.create(text: "Where was Mark born?", 
        answer_one: "Mexico City", 
        answer_two: "Tokyo", 
        answer_three: "Perth", 
        answer_four: "Jakarta", 
        correct: 3)
puts "done seeding!"