import {createContext} from "react";
import {IComment} from "./types/Comment";

export const CommentsContext = createContext<IComment[]>([]);
