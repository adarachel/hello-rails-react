Rails.application.routes.draw do
  root 'greetings_api#random_greeting'  # Set the root route to your GreetingsApiController
  get "/api/random_greeting", to: "greetings_api#random_greeting"  # Endpoint for random greeting API
  # Add other routes as needed
end