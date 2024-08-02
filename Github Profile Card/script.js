const user = {
    name : document.getElementById('name'),
    username : document.getElementById('username'),
    pfp : document.getElementById('pfp'),
    bio : document.getElementById('bio'),
    followers : document.getElementById('followers'),
    following : document.getElementById('following'),
    github : document.getElementById('githubLink')
}

const username = "geeksrahul";
const URL = `https://api.github.com/users/${username}`;
const xhr = new XMLHttpRequest();
xhr.open('GET', URL, true);
xhr.onreadystatechange = ()=> {
    if(xhr.readyState === 4) {
        let data = JSON.parse(xhr.responseText);
        console.log(data);
        user.name.textContent = data.name;
        user.username.textContent = `@${data.login}`;
        user.pfp.src = data.avatar_url;
        user.bio.textContent = data.bio;
        user.followers.textContent = data.followers;
        user.following.textContent = data.following;
        user.github.href = data.html_url;
    }
}
xhr.send();



