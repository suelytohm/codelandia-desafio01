import {useState, useEffect} from 'react';
import './App.css';
import Card from './components/card';
import Header from './components/header';
import axios from 'axios'

function App() {
  const [news, setNews] = useState([])
  const [filteredItems, setFilteredItems] = useState([]);
  const [search, setSearch] = useState("");
  const url = "https://www.tabnews.com.br/api/v1/contents?page=1&per_page=15&strategy=relevant";

  let noticias;
  if (filteredItems.length > 0) {
    noticias = filteredItems;
  } else {
    noticias = news;
  }

  useEffect(() => {
    axios.get(url)
    .then((response) => {
      setNews(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  const handleNews = (text) => {
    setSearch(text);
  }

  useEffect(() => {
    const filtered = news.filter(item => item.title.toLowerCase().includes(search));
    setFilteredItems(filtered);
  }, [search, news])
  

  return (
    <div className="App">
      <Header handleNews={handleNews} />
      <section>
        {
          noticias &&
          noticias.map((item) => (
            <Card key={item.id} search={search} titulo={item.title} data={item.created_at} link={`https://www.tabnews.com.br/${item.owner_username}/${item.slug}`} />
          )) 
        }
      </section>
    </div>
  );
}

export default App;
