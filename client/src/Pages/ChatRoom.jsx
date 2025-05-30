import NavBar from "../Components/NavBar";


export default function ChatRoom(){

    return(
        <>  
            <NavBar />
            <div id="page-container">
                <div id="chat-history-container">
                    <h1>This is where chats will be</h1>
                    <p>This is an example message</p>
                </div>
                <div id="message-container">
                    <h1>This is where the messages will be created</h1>
                    <input type="text" placeholder="What do you want to say?"/>
                    <button>Send</button>
                </div>
            </div>
        </>
    )
}



