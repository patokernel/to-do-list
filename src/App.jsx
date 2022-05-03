import './App.css'
import githubLogo from './images/githubLogo.png'
import TaskList from './components/TaskList'

function App() {
  return (
    <div className="App">
      <div className='todo-list-principal'>
        <h1>Mis tareas</h1>
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