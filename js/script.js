const allLoadPost = async() =>{
  const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
  const data = await response.json();
  // console.log(data)
  const post = data.posts
  // console.log(post)
  allDisplayPosts(post)
}
allLoadPost()

const loadPost = async(searchText) =>{
    const response = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`);
    const data = await response.json();
    // console.log(data)
    const post = data.posts
    // console.log(post)
    allDisplayPosts(post)
}
const allDisplayPosts = allPosts =>{
    const cardContainer = document.getElementById('card-container')

    // clear phone container card before adding new cards
     cardContainer.textContent = ''

    allPosts.forEach(posts => {
        // console.log(posts)
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="flex gap-x-6 justify-center">
        <div
          class="flex gap-6 bg-[#797DFC1A] w-[740px] rounded-3xl p-10 mt-12"
        >
          <div class="w-[72px] h-[72px] relative">
            <img
              src="${posts.image}"
              alt=""
            />
            <div class="w-4 h-4 rounded-full absolute -top-1 -right-1 ${posts?.isActive?"bg-[#10B981]" :"bg-[#FF3434]"}"></div>
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
                <div class="btn rounded-full ml-64 bg-[#10B981] mt-3">
                  <button onclick="emailBtnClick(${posts.id})" class="email-btn-click text-3xl">
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

    // hide loading spinner
    loaderIconToggle(false)


}

const latestPost = async() =>{
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
    const postData = await response.json()
    // console.log(postData)
    latestPostDisplay(postData)
}
const latestPostDisplay = allLatestPost =>{
  // console.log(allLatestPost)
  const latestPostContainer = document.getElementById('latest-post-container')
  allLatestPost.forEach (postLatest =>{
    // console.log(postLatest)
    const div = document.createElement('div')
    div.innerHTML = `
    <div
    class="border border-indigo-600 w-[374px] h-[474px] mt-12 rounded-[24px] p-2"
  >
    <div class="w-[326px] h-[190px] justify-center ml-3 mt-3">
      <img
        class="rounded-3xl"
        src="${postLatest.cover_image}"
        alt=""
      />
    </div>
    <div class="flex items-center mt-8 gap-x-2">
      <i class="fa-regular fa-calendar-days"></i>
      <p>${postLatest?.author?.posted_date || "No Publish Date"}</p>
    </div>
    <div>
      <p class="text-lg font-extrabold mt-3">
        ${postLatest.title}
      </p>
      <p class="text-base font-normal mt-3">
      ${postLatest.description}
      </p>
    </div>
    <div class="flex items-center mt-4 gap-x-4">
      <div class="w-11 h-11">
        <img
          class="rounded-3xl"
          src="${postLatest. profile_image}"
          alt=""
        />
      </div>
      <div>
        <p class="text-base font-bold">${postLatest.author.name}</p>
        <p>${postLatest?.author?.designation || "Unknown"}</p>
      </div>
    </div>
  </div>
    `
    latestPostContainer.appendChild(div)
  })
}

// Handle search button
const handleSearch = () =>{
  loaderIconToggle (true)
  // console.log('click')
  const searchField = document.getElementById('search-field')
  const searchText = searchField.value
  console.log(searchText)
  loadPost(searchText)
}

const loaderIconToggle = (isLoading) =>{
  const loaderIcon = document.getElementById('loader-icon')
  if(isLoading){
    loaderIcon.classList.remove('hidden')
  }
  else{
    loaderIcon.classList.add('hidden')
  }

} 

latestPost()



let sum = 0;
const emailBtnClick = async(id) =>{
console.log(id)

const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
const data = await res.json()
const postEl = data?.posts

const singlePost = postEl.find(post => post.id === id) 
console.log(singlePost)

sum = sum + 1;
const readCount = document.getElementById('read-count')
readCount.innerText = sum

const slideApndChild = document.getElementById('slide-apnd-child')
const div = document.createElement('div')
div.innerHTML += `
<li>${singlePost.title} - ${singlePost.view_count}</li>
`
slideApndChild.appendChild(div)

}




