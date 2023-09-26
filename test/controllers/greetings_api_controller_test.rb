require "test_helper"

class GreetingsApiControllerTest < ActionDispatch::IntegrationTest
  test "should get random_greeting" do
    get greetings_api_random_greeting_url
    assert_response :success
  end
end
