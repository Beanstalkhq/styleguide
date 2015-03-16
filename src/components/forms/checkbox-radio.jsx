var React = require('react');
var Highlight = require('react-highlight');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="bss-fixed-focus bss-card">
				<div className="bss-card__header bss-subheader">
					Checkboxes and Radios
				</div>
				<div className="bss-card__body">
					<div className="bss-subheader-sm bottom-sm-space">Inline checkboxes and radios</div>
					<div className="row">
						<div className="col-xs-12">
							<form>
								<label className="radio-inline">
									<input type="radio" value="1" name="testQuestion"/>&nbsp;&nbsp;Yes
								</label>
								<label className="radio-inline">
									<input type="radio" value="1" name="testQuestion"/>&nbsp;&nbsp;No
								</label>
							</form>
						</div>
					</div>
<Highlight className="html">
{
`<form>
  <label class="radio-inline">
    <input type="radio" value="1" name="testQuestion"/>&nbsp;&nbsp;Yes
  </label>
  <label class="radio-inline">
    <input type="radio" value="1" name="testQuestion"/>&nbsp;&nbsp;No
  </label>
</form>`
}
</Highlight>
					<div className="row margin-top-16">
						<div className="col-xs-12">
							<form>
								<label className="checkbox-inline">
									<input type="checkbox" id="inlineCheckbox1" value="option1"/>1
								</label>
								<label className="checkbox-inline">
									<input type="checkbox" id="inlineCheckbox2" value="option2"/>2
								</label>
								<label className="checkbox-inline">
									<input type="checkbox" id="inlineCheckbox3" value="option3"/>3
								</label>
							</form>
						</div>
					</div>
<Highlight className="html">
{
`<form>
   <label class="checkbox-inline">
     <input type="checkbox" id="inlineCheckbox1" value="option1"/>1
   </label>
   <label class="checkbox-inline">
     <input type="checkbox" id="inlineCheckbox2" value="option2"/>2
   </label>
   <label class="checkbox-inline">
     <input type="checkbox" id="inlineCheckbox3" value="option3"/>3
   </label>
</form>`
}
</Highlight>



				</div>
				<div className="bss-card__hr"></div>
				<div className="bss-card__body">
					<div className="bss-subheader-sm">Stacked checkboxes and radios</div>
					<div className="row">
						<div className="col-xs-12">
							<form>
								<div className="radio">
									<label>
										<input type="radio" name="optionsRadios" id="optionsRadios1" value="option1"/>Option one is this and that&mdash;be sure to include why it's great
									</label>
								</div>
								<div className="radio">
									<label>
										<input type="radio" name="optionsRadios" id="optionsRadios1" value="option1"/>Option two is this and that&mdash;be sure to include why it's great
									</label>
								</div>
								<div className="radio">
									<label>
										<input type="radio" name="optionsRadios" id="optionsRadios1" value="option1"/>Option one is this and that&mdash;be sure to include why it's great
									</label>
								</div>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-12">
							<form>
								<div className="checkbox">
									<label>
										<input type="checkbox"/>Check me out
									</label>
								</div>
								<div className="checkbox">
									<label>
										<input type="checkbox"/>Check me out
									</label>
								</div>
								<div className="checkbox">
									<label>
										<input type="checkbox"/>Check me out
									</label>
								</div>

							</form>
						</div>
					</div>

<Highlight className="html">
{
`<form>
  <div class="radio">
    <label>
      <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1"/>Option one is this and that&mdash;be sure to include why it's great
    </label>
  </div>
  <div class="checkbox">
    <label>
      <input type="checkbox"/>Check me out
    </label>
  </div>
</form>`
}
</Highlight>


					<div className="bss-subheader-sm top-md-space">Right-aligned checkboxes and radios</div>
					<div className="row">
						<div className="col-xs-12">
							<form className="form-horizontal">
								<div className="col-xs-offset-2 col-xs-10">
									<div className="radio">
										<label>
											<input type="radio" name="optionsRadios" id="optionsRadios1" value="option1"/>Option one is this and that&mdash;be sure to include why it's great
										</label>
									</div>
									<div className="radio">
										<label>
											<input type="radio" name="optionsRadios" id="optionsRadios1" value="option1"/>Option two is this and that&mdash;be sure to include why it's great
										</label>
									</div>
									<div className="radio">
										<label>
											<input type="radio" name="optionsRadios" id="optionsRadios1" value="option1"/>Option one is this and that&mdash;be sure to include why it's great
										</label>
									</div>
								</div>
							</form>
						</div>
					</div>

<Highlight className="html">
{
`<form class="form-horizontal">
  <div class="col-xs-offset-2 col-xs-10">
    <div class="radio">
      <label>
	  <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1"/>Option one is this and that&mdash;be sure to include why it's great
	</label>
    </div>
    <div class="radio">
	<label>
	  <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1"/>Option two is this and that&mdash;be sure to include why it's great
	</label>
    </div>
    <div class="radio">
	<label>
	  <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1"/>Option one is this and that&mdash;be sure to include why it's great
	</label>
    </div>
  </div>
</form>`
}
</Highlight>
				</div>
			</div>
		)
	}
});