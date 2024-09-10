import './ChatBotApp.css';

const ChatBotApp = () => {
  return (
    <div className="chat-app">
        <div className="chat-list">
            <div className="chat-list-header">
                <h2>Chat List</h2>
                <i className="bx bx-edit-alt new-chat"></i>
            </div>
            <div className="chat-list-item active">
                <h4>Chat 10-09-2024 11:56:15 PM</h4>
                <i className="bx bx-x-circle"></i>
            </div>
            <div className="chat-list-item">
                <h4>Chat 10-09-2024 11:56:15 PM</h4>
                <i className="bx bx-x-circle"></i>
            </div>  <div className="chat-list-item">
                <h4>Chat 10-09-2024 11:56:15 PM</h4>
                <i className="bx bx-x-circle"></i>
            </div>
        </div>
        <div className="chat-window">
            <div className="chat-tittle">
                <h3>Chat With AI</h3>
                <i className="bx bx-arrow-back arrow"></i>
            </div>
            <div className="chat">
                <div className="prompt">
                    Hi , how are you ? <span> 12:01:44 AM</span>
                </div>
                <div className="response">
                    Hello , I am just a computer program , so , I dont have a feelings , 
                    but I am here and ready to assist you ? Hoe can I Help you today! <span> 12:01:45 AM</span>
                </div>
                <div className="typing">Typing ...</div>
            </div>
            <form className="msg-form"> 
             <i className="fa-solid fa-face smile emoji"></i>
             <input type="text" className="msg-input" placeholder="Type a message ..."/>
             <i className="fa-solid fa-paper-plane"></i>

            </form>
        </div>
    </div>
  )
}

export default ChatBotApp