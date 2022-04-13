import PropTypes from 'prop-types';
import Message from './Message';
import Response from './Response';
import Typing from './Typing';

export default function MessageHistory({ list }) {
  const messagesList = !!list.length &&
      list.map((msg) => {
        if (msg.type === 'message') {
          return <Message from={msg.from} message={msg} key={msg.id}/>
        }

        if (msg.type === 'response') {
          return <Response from={msg.from} message={msg} key={msg.id}/>
        }

        return <Typing from={msg.from} message={msg} key={msg.id}/>;        
      });

  return (
    <ul>
      {messagesList}
    </ul>
  );
}

MessageHistory.propTypes = {
  list: PropTypes.array,
};
