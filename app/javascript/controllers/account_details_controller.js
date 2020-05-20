import { Controller } from "stimulus"
import StimulusReflex from 'stimulus_reflex';

export default class extends Controller {
  static targets = [ "accountId", "name", "account"]

  connect() {
    StimulusReflex.register(this)
  }

  populateClientSelector() {
    this.stimulate('ListReflex#populate', this.accountIdTarget.value)
    this.showDetail()
   }

  showDetail() {
    this.nameTarget.textContent = 410990
    this.accountTarget.textContent = "Iron Man"
  }


}