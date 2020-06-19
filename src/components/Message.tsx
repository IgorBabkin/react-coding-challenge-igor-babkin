import React, {FC} from "react";
import {CommentsContext} from "../CommentsContext";
import {CommentId} from "../types/Comment";
import {MessageList} from "./MessageList";

interface MessageProps {
    id: CommentId;
    onAddReply: (id: CommentId) => void;
}

export const Message: FC<MessageProps> = ({id, onAddReply}) => {
    return (
        <CommentsContext.Consumer>
            {(messages) => {
                const message = messages.find((item) => item.id === id)
                if (!message) {
                    throw new Error(`Cannot find message ${id}`);
                }
                return (
                    <dl>
                        <dt>User:</dt>
                        <dd>{message.user}</dd>
                        <dt>Text:</dt>
                        <dd>{message.text}</dd>

                        <MessageList
                            ids={messages.filter(({parent}) => parent === id).map(({id}) => id)}
                            onAddReply={onAddReply}
                        />
                        <button onClick={() => onAddReply(id)}>Add reply</button>
                    </dl>
                )
            }}
        </CommentsContext.Consumer>
    )
}
