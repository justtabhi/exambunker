import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import Welcome from './component/Welcome';
import registerServiceWorker from './registerServiceWorker';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import CreateArticle from './component/CreateArticle';
import Login from './component/Login';
import SingleArticle from './component/SingleArticle';

const Home = () => {
    return <h1>This is home page</h1>
}

const About = () => {
    return <h1>This is About page</h1>
}

ReactDOM.render(<BrowserRouter>
<div>
    <Navbar></Navbar>
    <Route exact path="/" component={Welcome}></Route>
    <Route path="/about" component={About}></Route>
    <Route path="/home" component={Home}></Route>
    <Route path="/articles/create" component={CreateArticle}></Route>
    <Route path="/login" component={Login}></Route>
    <Route path="/article/:slug" component={SingleArticle}></Route>
    <Footer></Footer>
</div>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
