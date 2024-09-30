const apiKey = '69e54be3b3d041ca9be9a6c79d713ffb';
const url = `https://newsapi.org/v2/everything?q=typhoon&apiKey=${apiKey}`;

async function fetchNews() {
    try {
        const response = await fetch(url, { mode: 'cors' });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data.articles) {
            displayNews(data.articles);
        } else {
            console.error('No articles found');
        }
    } catch (error) {
        console.error('Error fetching the news:', error);
    }
}


function displayNews(articles) {
    const newsContainer = document.getElementById('news-container');
    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('article');
        articleElement.style.marginBottom = '40px';
        articleElement.innerHTML = `
            <h2>${article.title}</h2>
            <img src="${article.urlToImage}" alt="${article.title}" style="width:100%; height:auto; max-width:600px;">
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        `;
        newsContainer.appendChild(articleElement);
    });
}
    
fetchNews();
