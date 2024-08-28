CREATE TABLE user_messages (
  message_id SERIAL PRIMARY KEY,
  message VARCHAR(255) NOT NULL,
  from_user_id UUID NOT NULL,
  username VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  FOREIGN KEY (from_user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);
