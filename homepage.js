
const apiKey = 'c269712b1b394ee4ad869967a12bd043'; // Replace with your actual WorldNews API Key
const apiUrl = `https://worldnewsapi.com/api/v1/news?apikey=${apiKey}&country=PH&category=weather,flood`;

async function fetchNews() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const newsContainer = document.getElementById('news-container');

        data.articles.forEach(article => {
            const newsCard = document.createElement('div');
            newsCard.classList.add('news-card');

            const img = document.createElement('img');
            img.src = article.image || 'default-image.jpg';  // Fallback to default if no image

            const title = document.createElement('h2');
            title.textContent = article.title;

            const description = document.createElement('p');
            description.textContent = article.description || 'No description available.';

            const link = document.createElement('a');
            link.href = article.url;
            link.target = '_blank';
            link.textContent = 'Read more';

            newsCard.appendChild(img);
            newsCard.appendChild(title);
            newsCard.appendChild(description);
            newsCard.appendChild(link);

            newsContainer.appendChild(newsCard);
        });
    } catch (error) {
        console.error('Error fetching the news:', error);
    }
}

fetchNews();
