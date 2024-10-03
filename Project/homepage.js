const apiKey = 'b88af68a366713276093fcc34d511599'; 
const newsContainer = document.getElementById('news-container');

async function fetchTyphoonNews() {
    try {
        const response = await fetch('https://api.example.com/typhoon-news');
        const data = await response.json();
        
        // Log the data to inspect its structure
        console.log(data);
        
        // Check if articles exist
        if (!data.articles) {
            throw new Error("Articles property is undefined");
        }

        // Proceed with processing articles
        console.log(data.articles);
    } catch (error) {
        console.error("Error fetching news:", error);
    }
}

