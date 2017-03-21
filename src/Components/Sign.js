import React, { Component } from 'react';
import { Link } from 'react-router'
import { web3 } from '../uportSetup.js'

<<<<<<< HEAD:app/javascripts/Components/Sign.js

export default class Sign extends React.Component {
=======
class Sign extends Component {
>>>>>>> release/1.4.0:src/Components/Sign.js
  constructor (props) {
    super(props)
    let self = this
    let statusContract = web3.eth.contract([{'constant': false, 'inputs': [{'name': 'status', 'type': 'string'}], 'name': 'updateStatus', 'outputs': [], 'type': 'function'}, {'constant': false, 'inputs': [{'name': 'addr', 'type': 'address'}], 'name': 'getStatus', 'outputs': [{'name': '', 'type': 'string'}], 'type': 'function'}])
    let status = statusContract.at('0xB42E70a3c6dd57003f4bFe7B06E370d21CDA8087')
    let address = web3.eth.defaultAccount
    status.getStatus.call(address, function (error, statusText) {
      if (error) { throw error }
      self.setState({statusText: statusText})
    })
    this.setStatus = this.setStatus.bind(this)
    this.waitForMined = this.waitForMined.bind(this)
    this.state = {
      status: status,
      tx: null,
      error: null,
      statusText: null
    }
  }

  setStatus (e) {
    e.preventDefault();
    let self = this
    let statusText = this.refs.statusInput.value
    console.log('set status:' + statusText)
    this.setState({statusText: '(updating to '+statusText + ')'})

    this.state.status.updateStatus(statusText, function (err, txHash) {
      console.log(err, txHash)
      self.setState({tx: txHash})
      self.waitForMined(txHash, {blockNumber: null})
    })
  }
  waitForMined (txHash, res) {
    let self = this
    if (res.blockNumber) {
      self.state.status.getStatus.call(web3.eth.defaultAccount, function (e, r) {
        self.setState({statusText: r})
      })
    } else {
      console.log('not mined yet.')
      // check again in one sec.
      setTimeout(function () {
        web3.eth.getTransaction(txHash, function (e, r) {
          if(r==null) r={blockNumber: null} //Some nodes do not return pending tx
          self.waitForMined(txHash, r)
        })
      }, 1000)
    }
  }


  render () {
    return (
      <div className='container centered' style={{maxWidth: '400px'}}>
        <Link to='/'>
          <img className='main-logo' src='images/uPort-logo.svg' alt='uPort'
            title='uPort Logo'
            style={{maxWidth: '90px', margin: '20px auto 40px', display: 'block'}} />
        </Link>
        <div id='status'>
          Your current Status on the Blockchain:
          <h3 id='currentStatus'>{this.state.statusText}</h3>
          <br />
          <form>
            <ol className='fields'>
              <li>
                <label>New Status:</label>
                <input id='statusInput' ref='statusInput' type='text' placeholder='Status' defaultValue="I'm Happy" />
              </li>
              <li>
                <button className='btn' onClick={this.setStatus}>Set new status!</button>
              </li>
            </ol>
          </form>
        </div>

        {this.state.tx
        ? <div id='success' style={{display: 'none'}}>
          <h3>Success! You have set your status</h3>
          <p><strong>Tx:</strong><span id='tx' style={{display: 'inline-block', marginLeft: '10px'}} /></p>
        </div>
        : null }

        {this.state.error
        ? <div id='errorDiv'>
          <h3>Error! You have NOT set your status.</h3>
          <p><strong>Error:</strong><span id='error' style={{display: 'inline-block', marginLeft: '10px'}} /> </p>
        </div>
        : null }
      </div>
    )
  }
}

export default Sign;
