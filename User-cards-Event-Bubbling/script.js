let wrapper = document.querySelector('.card-wrapper')
var users = [
    {
        userImage: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3N8ZW58MHx8MHx8fDA%3D",
        userName: "Aarav Sharma",
        userDescription: "Travel blogger exploring hidden \n gems around the world.",
        followers: 12000,
        posts: 245,
        status: 'Stranger'
    },
    {
        userImage: "https://plus.unsplash.com/premium_photo-1731378711407-9ec14c262a2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHByb2ZpbGUlMjBwaWNzfGVufDB8fDB8fHww",
        userName: "Maya Kapoor",
        userDescription: "Foodie and home chef sharing delic\nious recipes.",
        followers: 8700,
        posts: 132,
        status: 'Stranger'
    },
    {
        userImage: "https://images.unsplash.com/photo-1649433658557-54cf58577c68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHByb2ZpbGUlMjBwaWNzfGVufDB8fDB8fHww",
        userName: "Rahul Verma",
        userDescription: "Tech enthusiast, gadget reviewer,\n and coder.",
        followers: 15900,
        posts: 300,
        status: 'Stranger'
    },
    {
        userImage: "https://plus.unsplash.com/premium_photo-1731499365696-82a9554a575d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHByb2ZpbGUlMjBwaWNzfGVufDB8fDB8fHww",
        userName: "Sneha Nair",
        userDescription: "Fitness coach helping people stay \nhealthy and fit.",
        followers: 10450,
        posts: 198,
        status: 'Stranger'
    },
    {
        userImage: "https://images.unsplash.com/photo-1659857279356-0a8d7d23b653?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHByb2ZpbGUlMjBwaWNzfGVufDB8fDB8fHww",
        userName: "Dev Mehta",
        userDescription: "Photographer capturing moments one\n frame at a time.",
        followers: 14300,
        posts: 275,
        status: 'Stranger'
    },
    {
        userImage: "https://images.unsplash.com/photo-1685903772095-f07172808761?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxwcm9maWxlJTIwcGljc3xlbnwwfHwwfHx8MA%3D%3D",
        userName: "Tanya Singh",
        userDescription: "Digital artist creating magical illust-\nrations. ",
        followers: 9800,
        posts: 164,
        status: 'Stranger'
    },
    {
        userImage: "https://plus.unsplash.com/premium_photo-1731499365452-6b8dc111229a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxwcm9maWxlJTIwcGljc3xlbnwwfHwwfHx8MA%3D%3D",
        userName: "Ishaan Roy",
        userDescription: "Finance nerd sharing investment tips\n and insights.",
        followers: 11200,
        posts: 210,
        status: 'Stranger'
    },
    {
        userImage: "https://plus.unsplash.com/premium_photo-1731430641443-4defad082d98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQwfHxwcm9maWxlJTIwcGljc3xlbnwwfHwwfHx8MA%3D%3D",
        userName: "Neha Patil",
        userDescription: "DIY and craft creator with a passion\n for handmade art.",
        followers: 7600,
        posts: 121,
        status: 'Stranger'
    },
    {
        userImage: "https://images.unsplash.com/photo-1652781269535-f13e466904a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ2fHxwcm9maWxlJTIwcGljc3xlbnwwfHwwfHx8MA%3D%3D",
        userName: "Karan Malhotra",
        userDescription: "Motivational speaker inspiring young\n minds daily.",
        followers: 15300,
        posts: 302,
        status: 'Stranger'
    },
    {
        userImage: "https://plus.unsplash.com/premium_photo-1732196162374-3ca35331dc6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI3fHxwcm9maWxlJTIwcGljc3xlbnwwfHwwfHx8MA%3D%3D",
        userName: "Riya Desai",
        userDescription: "Fashion influencer with a love for \nbold styles.",
        followers: 18600,
        posts: 344,
        status: 'Stranger'
    }
];

function createElement(cla) {
    let s = '';
    users.forEach((e, i) => {
        s += `
        <div class="card">
            <div class="card2">
                <img src="${e.userImage}">

                <div class="content-container ${cla}" id="content-container-${i}">
                    <div class="blur-bg"></div>
                    <div class="content">

                        <div class="info-container">
                            <div class="info">
                                <h2>${e.userName}</h2>
                                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px"
                                    viewBox="0 0 24 24" width="24px" fill="#e3e3e3">
                                    <g>
                                        <rect fill="none" height="24" width="24" />
                                    </g>
                                    <g>
                                        <path
                                            d="M23,12l-2.44-2.79l0.34-3.69l-3.61-0.82L15.4,1.5L12,2.96L8.6,1.5L6.71,4.69L3.1,5.5L3.44,9.2L1,12l2.44,2.79l-0.34,3.7 l3.61,0.82L8.6,22.5l3.4-1.47l3.4,1.46l1.89-3.19l3.61-0.82l-0.34-3.69L23,12z M10.09,16.72l-3.8-3.81l1.48-1.48l2.32,2.33 l5.85-5.87l1.48,1.48L10.09,16.72z" />
                                    </g>
                                </svg>
                                <p class='status'>${e.status}</p>
                            </div>
                            <div class="description">
                                <p>${e.userDescription.replaceAll('\n', '<br>')}</p>
                            </div>
                        </div>

                        <div class="social-container">
                            <div class="social">
                                <div class="followers">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24"
                                        width="24px" fill="#e3e3e3">
                                        <path d="M0 0h24v24H0V0z" fill="none" />
                                        <path
                                            d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                    </svg>
                                    <p>${e.followers}</p>
                                </div>
                                <div class="posts">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24"
                                        width="24px" fill="#e3e3e3">
                                        <path d="M0 0h24v24H0V0z" fill="none" />
                                        <path
                                            d="M20 4v12H8V4h12m0-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 9.67l1.69 2.26 2.48-3.1L19 15H9zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z" />
                                    </svg>
                                    <p>${e.posts}</p>
                                </div>
                            </div>
                            <button type="button" class="btn" id="${i}">Follow</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    })

    wrapper.innerHTML = s;
}

createElement()

let content = document.querySelectorAll('.content-container');
let btn = Array.from(document.getElementsByClassName('btn'));

function change() {
    // let flag = true;
    wrapper.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn')) {
            let gold = e.target.id
            let status = document.querySelectorAll('.status')

            if (users[gold].status == 'Stranger') {
                users[gold].status = 'Friend'
                status[gold].innerText = users[gold].status
            }
            else {
                users[gold].status = 'Stranger'
                status[gold].innerText = users[gold].status
            }
        }
    },)
}

change()