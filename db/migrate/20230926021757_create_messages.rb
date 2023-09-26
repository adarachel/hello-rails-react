class CreateMessages < ActiveRecord::Migration[7.0]
  def up
    create_table :messages do |t|
      t.string :content
      t.timestamps
    end

    # Insert sample greetings
    Message.create(content: "Hello, World!")
    Message.create(content: "Hi there!")
    Message.create(content: "Greetings!")
    Message.create(content: "Welcome!")
    Message.create(content: "Salutations!")
  end
end