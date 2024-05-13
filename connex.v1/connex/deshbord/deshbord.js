//------------creating function for post-------------//

const follow_accept = document.querySelectorAll(".follow-btn");
const photoButton = document.getElementById("photo-button");
const photoUploader = document.getElementById("photo-uploader");
const postImagePreview = document.querySelector(".preview-image");

follow_accept.forEach((btn) => {
  btn.addEventListener("click", check_follow);
});

function check_follow(e) {
  const target_button = e.target;
  if (target_button.innerHTML === "+ Follow") {
    target_button.innerHTML = "Unfollow";
  } else if (target_button.innerHTML === "Unfollow") {
    target_button.innerHTML = "+ Follow";
  }
}

//----------------creating function for like-----------

function accept_like(){
  const like_action=document.querySelector('.action-btn');
   const user_like=document.querySelector('.user-like');
   user_like.style.color='blue';
}




photoButton.addEventListener("click", function () {
  photoUploader.click();
});

function imageSelect() {
  const image = photoUploader.files[0];
  const reader = new FileReader();
  reader.onload = function () {
    postImagePreview.src = reader.result;
    postImagePreview.classList.toggle("hide");
  };
  reader.readAsDataURL(image);
}

//----------------post-uplode-function--------------//

function post_view() {
  let parent = document.getElementById("ost-view");
  const textArea = document.getElementById("post-text");
  const image = photoUploader.files[0];

  if (!image) {
    createPost(null);
  } else {
    const reader = new FileReader();
    reader.onload = function () {
      createPost(reader.result);
    };
    reader.readAsDataURL(image);
  }

  // Function to create post content
  function createPost(imageDataUrl) {
    
    let stringifiedPost = `
      <div class="header">
        <div class="profile-pic">
          <img src="../images/WhatsApp Image 2024-04-26 at 07.32.30_51d6af34.jpg" >
        </div>
        <div class="user-info">
          <h3>Bappi Das</h3>
        </div>
        <button class="follow-btn">+ Follow</button>
      </div>
  
      <div class="content">
        <p>${textArea.value}</p>
        ${imageDataUrl ? `<img src="${imageDataUrl}" />` : ""}
      </div>
  
      <div class="stats">
        <span class="reactions">0</span>
        <span class="comments">0 comments &bullet; 0 repost</span>
      </div>
  
      <div class="actions">
        <button class="action-btn" onclick="accept_like(this);">
          <img class="user-like" src="../images/like.png" > Like
        </button>
        <button class="action-btn">
          <img src="../images/comment.png"> Comment
        </button>
        <button class="action-btn">
          <img src="../images/event.png" > Repost
        </button>
        <button class="action-btn">
          <img src="../images/send.png" > Send
        </button>
      </div>
    `;

    textArea.value = "";
    photoUploader.value = "";
    postImagePreview.src = "";
    postImagePreview.classList.toggle("hide");

    const postBox = document.createElement("div");
    postBox.classList.add("post");
    postBox.innerHTML = stringifiedPost;
    parent.insertBefore(postBox, parent.firstChild);
  }
}


function profile_edit(){
  let profileedit=document.querySelector('.sidebar-profile-box');
  profileedit.style.display='none';
}






// --------------------user-profile edit-----------------

let edit_profile=document.querySelector('.edit-profile');
let edit_page=document.querySelector('.edit-profile-detais');

edit_profile.addEventListener('click', ()=>{
  console.log('click');
  edit_page.style.display='flex';
});


//--------------------profile-uplode-details------------------

let input_file=document.querySelector('#uplode-new-image');
let input_name=document.querySelector('.updated-name');
let input_univercity=document.querySelector('.updated-univercity');
let savebtn=document.querySelector('.save-edit-detail');

let value='';
input_file.addEventListener('click', ()=>{
localStorage.setItem('imge',URL.createObjectURL(input_file.files[0]));
});

savebtn.addEventListener('click' ,() =>{
  edit_page.style.display='none';
})



