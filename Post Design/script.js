let container = document.querySelector(".container");
let instalink = document.querySelector("#instalink");
function postLikedEvent(btnLike, midHeart){
    if(btnLike.classList.contains("fa-regular")) {
        btnLike.classList.add("fa-solid");
        btnLike.classList.remove("fa-regular");
        btnLike.style.color = "red";
        midHeart.style.animationName = "postliked";
    } else {
        btnLike.classList.add("fa-regular");
        btnLike.classList.remove("fa-solid");
        btnLike.style.color = "black";
        midHeart.style.animationName = "none";
    }
}

function createPost(post) {
    let div = document.createElement("div");
    div.className = "profile-card";
    div.innerHTML = `
            <div class="thumbnail">
                <img src="${post.thumbail}" alt="" class="thumbnail-img">
                <i class="fa-solid fa-heart liked"></i>
            </div>
            <div class="icons">
                <i class="fa-regular fa-heart like"></i>
                <i class="fa-regular fa-comment"></i>
                <i class="fa-regular fa-paper-plane"></i>
                <i class="fa-regular fa-bookmark save"></i>
            </div>
            <div class="caption"> <span id="username"> @${post.username} </span> Hello, I'm Rahul Baraiya. Right Now I am doing BCA. I make website using HTML,CSS,JS,PHP, and MySQL</div>
            <button class="follow-btn btnFollow"> Follow </button>
        `;
    container.appendChild(div);
}

window.addEventListener("load", ()=>{
    // Adding Content Dynamically
    createPost({username:"geeksrahul", thumbail:"thumbnail.jpg"});
    // Applying Event Listeners On Dynamic Data
    document.querySelectorAll(".btnFollow").forEach((btn)=>{
        btn.addEventListener("click", (event)=>{
        if(event.target.classList.contains("follow-btn")) {
            event.target.innerHTML = "Unfollow";
            event.target.classList.remove("follow-btn");
            event.target.classList.add("unfollow-btn");
        } else {
            event.target.innerHTML = "Follow";
            event.target.classList.remove("unfollow-btn");
            event.target.classList.add("follow-btn");
        }
    })
    });


    document.querySelectorAll(".like").forEach((like)=>{
        like.addEventListener("click",(event)=>{
            let btnLike = event.target;
            let midHeart = event.target.parentNode.parentNode.querySelector(".liked");
            postLikedEvent(btnLike, midHeart);
        });
    })
    document.querySelectorAll(".thumbnail-img").forEach((thumbnail)=>{
        thumbnail.addEventListener("click", (event)=>{
            let btnLike = event.target.parentNode.parentNode.querySelector(".like");
            let midHeart = event.target.parentNode.querySelector(".liked");
            postLikedEvent(btnLike, midHeart);
        });
    });


    document.querySelectorAll(".save").forEach((save)=>{
        save.addEventListener("click", (event)=>{
            if(event.target.classList.contains("fa-regular")) {
                event.target.classList.add("fa-solid");
                event.target.classList.remove("fa-regular");
            } else {
                event.target.classList.add("fa-regular");
                event.target.classList.remove("fa-solid");
            }
        })
    });
});
