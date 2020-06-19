import React, {FC, useCallback, useState} from "react";
import {CommentId, IComment} from "../types/Comment";
import {Input} from "./ui-kit/Input";
import {TextArea} from "./ui-kit/TextArea";

interface CommentFormProps {
    parentId?: CommentId;
    onSubmit: (value: IComment) => void;
}

export const CommentForm: FC<CommentFormProps> = ({parentId, onSubmit}) => {
    const [user, setUser] = useState('');
    const [text, setText] = useState('');
    const onSubmitHandler = useCallback(() => {
        onSubmit({
            id: Date.now().toString(10),
            user,
            text,
            parent: parentId,
        });
        setUser('');
        setText('');
    }, [parentId, user, text]);
    return (
        <div>
            <Input
                label='User name'
                value={user}
                placeholder='put user name'
                onChange={setUser}
            />
            <TextArea
                onChange={setText}
                value={text}
                label='Text'
                placeholder='put text'
            />
            <button onClick={onSubmitHandler}>Submit</button>
        </div>
    );
}
