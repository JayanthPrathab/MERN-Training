likeCode=async()=>{
    return new Promise((likePost)=>{
        setTimeout(()=>{
            likePost("Liked the post")
        },3000)
    })
}
commentCode=async()=>{
    return new Promise((commentPost)=>{
        setTimeout(()=>{
            commentPost("Commented the post")
        },3000)
    })
}
shareCode=async()=>{
    return new Promise((sharePost)=>{
        setTimeout(()=>{
            sharePost("Shared the post")
        },3000)
    })
}
async function postCode(){
    var post=new Promise((createPost)=>{
        setTimeout(()=>{
            createPost("Post created successfully");
        },5000)
    })
    var [post,like,comment,share]=await Promise.all([post,likeCode(),commentCode(),shareCode()])
    console.log(post)
    console.log(like)
    console.log(comment)
    console.log(share)
}
postCode()