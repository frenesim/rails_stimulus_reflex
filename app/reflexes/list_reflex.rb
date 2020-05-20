# frozen_string_literal: true

class ListReflex < StimulusReflex::Reflex
  def populate(account_id)
    @components = [
      {underlyingable_type: "CurrentAccount",
        underlyings: [
          {
            underlyingable_id: 41099010001,
            name: "INVEURP", amount: 8721.77
          }
        ]
      }]
  end
end
