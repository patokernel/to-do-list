import './App.css'
import githubLogo from './images/githubLogo.png'
import CurrentDate from './components/CurrentDate'
import TaskList from './components/TaskList'

function App() {
  return (
    <div className="App">
      <div className='todo-list-principal'>
        <CurrentDate />
        <hr />
        <h1>Mis Tareas</h1>
        <TaskList />
      </div>
      <div className='github-logo-container'>
        <a href='https://github.com/patokernel' target='_blank' rel='noopener noreferrer'>
          <img
            className='github-logo shadow-drop-center'
            src={githubLogo}
            alt='GitHub'
          />
        </a>
      </div>
    </div>
  );
}

export default App