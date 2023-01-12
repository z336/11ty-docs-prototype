const { html } = require("code-tag");

function contact() {
  return html`
    <form id="content" class="contact" action="#">
      <header>
        <h2>Contact us</h2>
        <p>Submit a question and we can help.</p>
      </header>

      <div>
        <label id="title1" for="Field1">Full Name</label>
        <input id="Field1" name="Field1" type="text" class="field text fn" value="" />
      </div>

      <div>
        <label id="title3" for="Field3"> Email </label>
        <input id="Field3" name="Field3" type="email" spellcheck="false" value="" maxlength="255" />
      </div>

      <div>
        <label id="title4" for="Field4"> Message </label>
        <textarea id="Field4" name="Field4" spellcheck="true"></textarea>
      </div>

      <fieldset>
        <legend id="title5">Select a Choice</legend>
        <!-- <input id="radioDefault_5" name="Field5" type="hidden" value="" /> -->

        <div class="toggles">
          <input id="Field5_0" name="Field5" type="radio" value="First Choice" />
          <label for="Field5_0">First Choice</label>
        </div>

        <div class="toggles">
          <input id="Field5_1" name="Field5" type="radio" value="Second Choice" />
          <label for="Field5_1">Second Choice</label>
        </div>

        <div class="toggles">
          <input id="Field5_2" name="Field5" type="radio" value="Third Choice" />
          <label for="Field5_2">Third Choice</label>
        </div>
      </fieldset>

      <fieldset>
        <legend id="title6">Check All That Apply</legend>

        <div class="toggles">
          <input id="Field6" name="Field6" type="checkbox" value="First Choice" />
          <label for="Field6">First Choice</label>
        </div>

        <div class="toggles">
          <input id="Field7" name="Field7" type="checkbox" value="Second Choice" />
          <label for="Field7">Second Choice</label>
        </div>

        <div class="toggles">
          <input id="Field8" name="Field8" type="checkbox" value="Third Choice" />
          <label for="Field8">Third Choice</label>
        </div>
      </fieldset>

      <div>
        <label id="title106" for="Field106"> Select a Choice </label>
        <select id="Field106" name="Field106" class="field select medium">
          <option value="First Choice">First Choice</option>
          <option value="Second Choice">Second Choice</option>
          <option value="Third Choice">Third Choice</option>
        </select>
      </div>

      <div>
        <input id="saveForm" name="saveForm" type="submit" value="Submit" />
      </div>
    </form>
  `;
}

module.exports = contact;
