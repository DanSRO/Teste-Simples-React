import './styles/App.css';
import React from 'react';
import {Navbar} from './components/Navbar/Navbar';
import { Article } from './components/Articles/Article';
import imgArticle from './assets/images/artigo1.png';
import imgArticle2 from './assets/images/artigo2.png';
import imgArticle3 from './assets/images/artigo3.png';

class App extends React.Component {

  render (){
    return(
      <> 
      <Navbar/>
      <section id='articles'>
        <Article 
        title='exemplo 1' 
        provider='Nasa' 
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        thumbnail={imgArticle}
        />

        <Article title='exemplo 2' 
        provider='Outra agência' 
        description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        thumbnail={imgArticle2}
        />
        
        <Article title='exemplo 3' 
        provider='Mais outra agência' 
        description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        thumbnail={imgArticle3}
        />
      
      </section>
      </>
    );
  }
}
export default App;
