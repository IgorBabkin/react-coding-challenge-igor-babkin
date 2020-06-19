import {CommentId} from "../types/Comment";
import React, {FC} from "react";
import {Message} from "./Message";

interface MessageListProps {
    ids: CommentId[];
    onAddReply: (id: CommentId) => void;
}

export const MessageList: FC<MessageListProps> = ({ids, onAddReply}) => {
    return (
        <div style={{padding: "1rem 0 0 1rem"}}>
            {ids.map((id) => (
                <div key={id}>
                    <Message
                        id={id}
                        onAddReply={onAddReply}
                    />
                </div>
            ))}
        </div>
    )
}
