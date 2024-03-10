import iQIFLogo from './assets/icon-splash-512.png'
import AppStoreLogo from './assets/AppStore.svg'
import entryScreenshot from './assets/entry_screenshot.png'
import './App.css'

function App() {

  return (
    <>
      <div>
        <img src={iQIFLogo} className="logo" alt="iQIF logo" />
      </div>
      <h1>iQIF</h1>
      <p className="description">
        A simple app to enter transactions on-the-go in the fewest taps for QIF import into <a href="https://www.gnucash.org" target='_blank'>GNUCash</a> or other money applications.
      </p>
      <div>
        <img className="screenshot" src={entryScreenshot} alt="screenshot of data entry in iQIF" />
      </div>
      <a href="https://apps.apple.com/us/app/iqif/id386493543">
        <img src={AppStoreLogo} alt="App Store logo" />
      </a>
    </>
  )
}

export default App
