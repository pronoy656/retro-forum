const loadPost = async() =>{
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await response.json();
    // console.log(data)
    const post = data.posts
    // console.log(post)
    allDisplayPosts(post)
}
const allDisplayPosts = allPosts =>{
    const cardContainer = document.getElementById('card-container')
    allPosts.forEach(posts => {
        // console.log(posts)
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="flex gap-x-6 justify-center">
        <div
          class="flex gap-6 bg-[#797DFC1A] w-[740px] rounded-3xl p-10 mt-12"
        >
          <div class="w-[72px] h-[72px]">
            <img
              src="${posts.image}"
              alt=""
            />
          </div>
          <div>
            <div class="flex gap-x-5 items-center">
              <div class="flex justify-center items-center">
                <i class="fa-solid fa-hashtag"></i>
                <p>${posts.category}</p>
              </div>
              <div class="flex">
                <p>Author :</p>
                <p>${posts.author.name}</p>
              </div>
            </div>
            <div>
              <p id="card-title" class="text-xl font-bold">
               ${posts.title}
              </p>
              <p class="text-base font-normal">
              ${posts.description}
              </p>
              <div class="border border-b-2 border-black mt-5"></div>
              <div class="flex gap-x-7">
                <div class="flex items-center gap-x-1">
                  <i class="fa-regular fa-message"></i>
                  <p>${posts.comment_count}</p>
                </div>
                <div id="view-count" class="flex items-center gap-x-1">
                  <i class="fa-regular fa-eye"></i>
                  <p>${posts.view_count}</p>
                </div>
                <div class="flex items-center gap-x-1">
                  <i class="fa-regular fa-clock"></i>
                  <p>${posts.posted_time}</p>
                </div>
                <div class="btn ml-64 bg-[#10B981] mt-3">
                  <button class="email-btn-click">
                    <i class="fa-solid fa-envelope"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        `
        cardContainer.appendChild(div)
    });

}

const latestPost = async() =>{
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
    const postData = await response.json
    console.log(postData)
}
latestPost()
loadPost()


// ----------------------------button click handler-------------------

const allEmailButton = document.getElementsByClassName('email-btn-click');
let read = 0;
for(const button of allEmailButton){
//    console.log(button)
button.addEventListener('click',function(e){
    read = read + 1;
})
   
}

