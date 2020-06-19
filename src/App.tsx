import React, {useState} from 'react';
import './App.css';
import {CommentId, IComment} from "./types/Comment";
import {CommentsContext} from "./CommentsContext";
import {CommentForm} from "./components/CommentForm";
import {MessageList} from "./components/MessageList";

function App() {
    const [currentComment, setCurrentComment] = useState<CommentId>();
    const [messages, setMessages] = useState<IComment[]>([
        {
            id: '1',
            text: 'Hello Sam',
            user: 'John Doe',
        }
    ]);
    const updateComment = (data: IComment) => {
        const newState = [
                ...messages,
                data,
            ];
        setMessages(
            newState
        );
    }

    const onAddReply = (id: CommentId) => setCurrentComment(id);

    return (
        <CommentsContext.Provider value={messages}>
            <div className="app">
                <div className="app__comment-form">
                    <CommentForm
                        parentId={currentComment}
                        onSubmit={(data) => {
                            console.log('Hey', data)
                            updateComment(data);
                        }}
                    />
                </div>
                <div className="app__comments">
                    <MessageList
                        ids={messages.filter(({parent}) => !parent).map(({id}) => id)}
                        onAddReply={onAddReply}
                    />
                </div>
            </div>
        </CommentsContext.Provider>
    );
}

export default App;
