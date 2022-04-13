import './App.css';
import Stars from './components/rating/Stars';
import Listing from './components/listing/Listing';
import MessageHistory from './components/chat/MessageHistory';

import etsy from './data/etsy.json';
import messages from './data/messages';

function App() {
  return (
    <>
      <div className="task-title rating-title">Рейтинг фильмов</div>
      <div className='raiting-card'>
        <h2 className='rating-card_title'>--Raiting--</h2>
        <Stars count={2}/>
      </div>

      <div className="task-title rating-title">Список предложений</div>
      <Listing items={etsy}/>

      <div className="task-title chat-title">История чата</div>
      <div className="clearfix container">
        <div className="chat">
          <div className="chat-history">
            <MessageHistory list={messages} />
          </div>
        </div>  
      </div>
    </>    
  );
}

export default App;
