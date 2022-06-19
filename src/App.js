// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import './App.css';
// eslint-disable-next-line no-unused-vars
import Todos from './TodoList/Todos'
// eslint-disable-next-line no-unused-vars
import TrafficLight from './TrafficLights/TrafficLight';
import './TrafficLights/styles.css'
import FetchGithubUsers from './API/FetchGithubUsers';

function App() {
    return ( <
        div className = "App" > { /* <Todos /> */ } {
            /* <TrafficLight initialValue={0}/>
                  <TrafficLight initialValue={1}/> */
        } < FetchGithubUsers / >
        <
        /div>
    );
}

export default App;