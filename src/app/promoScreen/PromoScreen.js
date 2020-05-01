import React from 'react'
import FeatureCol from '../../common/FeatureCol'
import colobus from '../../assets/colobus.png'
import Login from '../Auth/Login'
import Styles from './promoScreen.module.css'

const PromoScreen = () => (
  <div style={{ position: 'relative', overflow: 'hidden' }}>
    <div
      style={Styles.gradientBall}
    />
    <div
      style={Styles.circle}
    />
    <div id="topmenu">
      <ul>
        <li><a href="/colobus.html">COLOBUS</a></li>
        <li style={{ float: 'right' }}><a href="/tryme.html">Try Me</a></li>
        <li style={{ float: 'right' }}><a href="/login.html">Log In</a></li>
      </ul>
    </div>
    <div className="container" style={{ height: '100vh' }}>
      <div className="row flex-column-reverse flex-md-row" style={{ marginTop: '20%' }}>
        <div style={{ textAlign: 'center' }} className="col-md-6">
          <div style={{ textAlign: 'left', margin: 20 }}>
            <h1 style={{ fontSize: 100 }}>Collobus</h1>
            <h2>Meeting outcomes wherever you need them most</h2>
          </div>
        </div>
        <div className="col-md-6">
          <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', flexDirection: 'column',
          }}
          >
            <img src={colobus} alt='Collobus' style={{ marginBottom: 40 }} />
            <Login />
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
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
      </div>
      <div className="container">
        <div id="footer" className="row">
          <div className="footercolumn col-6">
            <img src={colobus} alt='Collobus'/>
          </div>
          <div className="footercolumn col-3">
            <h3>FOLLOW US</h3>
            <ul>
              <li><a href="www.wearepercent.com">Facebook</a></li>
              <li><a href="www.wearepercent.com">Instagram</a></li>
              <li><a href="www.wearepercent.com">Twitter</a></li>
            </ul>
          </div>
          <div className="footercolumn col-3">
            <h3>Company</h3>
            <ul>
              <li><a href="www.wearepercent.com">About</a></li>
              <li><a href="www.wearepercent.com">FAQ</a></li>
              <li><a href="www.wearepercent.com">Terms and Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default PromoScreen
