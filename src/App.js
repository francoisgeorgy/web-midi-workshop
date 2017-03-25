import { version } from 'inferno';
import Component from 'inferno-component';
import Logo from './logo';
import '../node_modules/spectre.css/dist/spectre.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Logo width="80" height="80" />
          <h2>{`Welcome to Inferno ${version}`}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
            <h1>Test with spectre.css</h1>
            <div class="form-group">
                <label class="form-switch">
                    <input type="checkbox" />
                    <i class="form-icon"></i> spectree.css switch
                </label>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
