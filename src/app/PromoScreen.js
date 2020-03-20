import React from 'react'
import FeatureCol from '../common/FeatureCol'
import colobus from '../assets/colobus.png'

const PromoScreen = () => (
  <div>
    <div id="topmenu">
      <ul>
        <li><a href="/colobus.html">COLOBUS</a></li>
        <li style={{ float: 'right' }}><a href="/tryme.html">Try Me</a></li>
        <li style={{ float: 'right' }}><a href="/login.html">Log In</a></li>
      </ul>
    </div>
    <div className="row">
      <div className="column">
        <p>Meeting outcomes wherever you need them most</p>
      </div>
      <div className="column">
        <img src={colobus} />
      </div>
    </div>
    <div>
      <FeatureCol
        src={colobus}
        title="Attach to Calendar Invites"
        description="Wandering into meetings not knowing what to expect? Wonder
                no more with Colobus pre meeting agendas."
      />
      <FeatureCol
        src={colobus}
        title="Push to Jira"
        description="You use Jira, we use Jira, everyone uses Jira. Nobody knows
                how to get their meeting outcomes in Jira. We do."
      />
      <FeatureCol
        src={colobus}
        title="Post to Slack"
        description="If you're like us, you like to be transaparent about your
                meetings. Tell the world in Slack."
      />
      <div id="footer">
        <div className="footercolumn">
          <img src={colobus} />
        </div>
        <div className="footercolumn">
          <h3>FOLLOW US</h3>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div className="footercolumn">
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>FAQ</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default PromoScreen
