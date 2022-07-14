import logo from './logo.svg';
import './App.scss';
import MyComponent from './examples/MyComponent.js';
import ListTodo from './Todos/ListTodo';
import Nav from './Nav/Nav';
import Home from './Example/Home';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
// rm -rf node_modules && rm ./package-lock.json && npm install
//install hinh dang loading
//npm install --save-exact react-toastify@8.0.2

//install axios de noi hien thi du lieu to database
//npm install --save-exact axios@0.21.4
import ListUser from './Users/ListUser';
import DetailUser from './Users/DetailUser';
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h2> Simple TODO Apps with React.js (Eric &amp; Hoi Dan IT)</h2>
    //     {/* /*<MyComponent/> */}
    //     <ListTodo/>

    //   </header>
    // </div>
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/todo">
            <ListTodo />
          </Route>
          <Route path="/about">
            <MyComponent />
          </Route>
          <Route path="/user" exact>
            <ListUser/>
          </Route>
          <Route path="/user/:id">
              <DetailUser />
            </Route>
        </Switch>

      </header>
    </div>
  </BrowserRouter>
  );
}

export default App;
