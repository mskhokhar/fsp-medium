class User < ApplicationRecord

  validates :username, :email, uniqueness: true, presence: true
  validates :password_digest, presence: true

  validates :password, length:{minimum: 6, allow_nil: true}
  #posts
  has_many :posts,
    foreign_key: :author_id,
    class_name: :Post
    
  #likes associations
  has_many :likes,
    foreign_key: :liker_id,
    class_name: :Like,
    dependent: :destroy

  has_many :liked_posts,
    through: :likes,
    source: :post

  #comments associations
  has_many :comments,
    foreign_key: :author_id,
    class_name: :Comment,
    dependent: :destroy
  
  #followed by another user

  has_many :followed_by,
    foreign_key: :user_id,
    class_name: :Follower

  has_many :followers,
    through: :followed_by,
    source: :follower_user

  #following another user
    has_many :following_others,
      foreign_key: :follow_user_id,
      class_name: :Follower,
      dependent: :destroy
    
    has_many :followings,
      through: :following_others,
      source: :user

  after_initialize :ensure_session_token

  attr_reader :password

  def self.find_by_credentials(username,password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end
