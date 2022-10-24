
let container = document.querySelector('.news-container')
let fetch_runned = 0;
fetch('https://newsapi.org/v2/everything?q=keyword&apiKey=e7e26b8d500f4004974c4f9e69b778d3')
.then(res =>res.json())
.then(data =>{
    data.articles.map((e)=>{
        news(e.urlToImage,e.title,e.content)
        if (fetch_runned<31) {
            
            fetch_runned +=1
        }
        if(fetch_runned==30){
                document.getElementById('invi').style.visibility = "hidden";
                document.getElementById('load').style.visibility = "hidden";
        }

    })
})



function news(img,title,dis){
    let news = document.createElement('div')
    news.classList.add('news')
    news.innerHTML =`
    
                    <div class="container">
                    <img src="${img}" class="news-image">
                        <div class="headline">${title}</div>
                        <div class="discription">
                            <span>${dis}</span>
                            </div>
                    </div>
    `
    container.append(news)
}


setTimeout(()=>{
if(document.getElementById('load').style.visibility != "hidden"){
    document.getElementById('invi').style.visibility = "visible";
}


},5000)