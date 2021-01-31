import { useRouter } from "next/router";
import { useEffect, useState } from 'react'
import axios from 'axios'
import Link from "next/link";


const baseURL = 'https://dummyapi.io/data/api'
const appID = '600b933802fab9402963a47e'

const Post = () => {
    const router = useRouter()
    const {postId} = router.query
    const [post,setPost] = useState(null)
    const [comment,setComment] = useState([])

    useEffect(() => getData()
    , [])

    async function getData(){
        const res1 = await axios.get(`${baseURL}/post/${postId}`, { headers: { "app-id": appID }})
        const res2 = await axios.get(`${baseURL}/post/${postId}/comment`, { headers: { "app-id": appID }})
        
        setPost(res1.data)
        setComment(res2.data.data)
    }
    
    function renderPost(){
        if(post){
            return (
                <div>
                    <p className="tag-cmt">tag : {post.tags.join()}</p>
                    <img src = {post.image} className="post-picture"></img>
                    <p className="like">{post.owner.firstName} {post.owner.lastName}</p>
                    <p className="like">Likes : {post.likes}</p>
                </div>
            )
        }
        else{
            return <></>
        }
    }

    function renderComment(){
        return comment.map((cmt) => {
         return (
         <div key={cmt.id}>
            <p className="tag-cmt">
                <span className="username">{cmt.owner.firstName} {cmt.owner.lastName} :</span> {cmt.message}
            </p>
        </div>
        )})
    }

    if(post){
        return (
            <>
                <div className="header">
                    <h1 className="header-txt">POST</h1>
                </div>
                <div>
                    <h1 className="post-topic">{post && post.text}</h1>
                    <div>
                        {renderPost()}
                        <div className="like">COMMENT :</div>
                        {renderComment()}
                    </div>
                </div>
                <Link href={`http://localhost:3000/`}><span className="home_btn">HOME</span></Link>
            </>
        );
    }
    else{
        return (
            <>
            <div className="loader-container">
                <div className="loader"></div>
            </div>   
            </>
        );
    }
}

export  default  Post

