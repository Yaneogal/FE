import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { getCommentDB, addCommentDB, deleteCommentDB } from "../../redux/module/comment";
import "../../css/comment.css";

const Comment = ({param}) => {

    const dispatch = useDispatch();
    const postId = parseInt(param)

    const list = useSelector((state) => state.comment.comments);

    const [comment, setComment] = useState("");
    const [data, setDate] = useState(list);
    
    console.log(list)
    console.log(data)

    const loadCommnet = () => {
        dispatch(getCommentDB(
            postId));
    };

    useEffect(() => {
        setDate(list)
        loadCommnet();
    },[data])

    const addcomment = () => {
        dispatch(addCommentDB(
            postId, comment));
            setComment("")
    }

    return (
        <div className="comment-container">
            <div className="comment-content">
                <div className="comment-add">
                    <input type="text" placeholder="댓글을 입력하세요" value={comment} onChange={(e) => setComment(e.target.value)}></input>
                    <button onClick={addcomment}>등록</button>
                </div> 
                {list.map((list, index) => {
                    return (
                        <div className="comment-list" key={index}>
                            <>
                            <div className="comment-user">
                                <img src={list.imgUrl} alt='profile'/>
                                <p>{list.nickname}</p>
                            </div>
                            <div className="comment">
                                <p>{list.comment}</p>
                            </div>
                            <div className="comment-info">
                                <span>2시간 전</span>
                                <span className="commentdelete"onClick={() => dispatch(deleteCommentDB(list.commentId))}>삭제</span>
                            </div>
                            </>
                        </div>
                    )})}
                </div>
            </div>
        )
    }

export default Comment;