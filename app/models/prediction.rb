class Prediction < ActiveRecord::Base
  belongs_to :user
  has_many :comments, :dependent => :destroy

  def as_json(options={})
    super.as_json(options).merge({:user_email => get_user_email, :user_name => get_user_name})
  end

  def get_user_email
    self.user && self.user.email
  end

  def get_user_name
    self.user.name
  end
end


