module OfferEngine
  def self.credit_card
    {
      :id=>"2342f8073e",
      :credit_card_id=>"2342f8073e",
      :number=>"XXXX0027",
      :type=>"visa",
      :primary=>true,
      :deleted=>false
    }
  end

  def self.credit_card_request
    {
      :number => "424242424242424", 
      :cvv => 123, 
      :month => 1, 
      :year => 2014,
    }
  end
end
