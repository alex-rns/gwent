# Load the Rails application.
require_relative 'application'
puts "Loaded SECRET_KEY_BASE: #{ENV['SECRET_KEY_BASE']}"
puts "Rails.env: #{Rails.env}"

# Initialize the Rails application.
Rails.application.initialize!
