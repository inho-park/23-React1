import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "박준성1",
        comment: "댓글 1111"
    },
    {
        name: "박준성2",
        comment: "댓글 2222"
    },
    {
        name: "박준성3",
        comment: "댓글 3333"
    }
]

export default function CommentList() {
    return (
        <div>
            {comments.map((foo) => {
                return (
                    <Comment name={foo.name} comment={foo.comment} />
                )
            })};
            
        </div>
    )
}