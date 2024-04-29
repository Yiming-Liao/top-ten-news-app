import './App.scss'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Buttons from './components/Buttons'
import Badge from './components/Badge'
import { useEffect, useState } from 'react';
import gsap from 'gsap';

const App = () => {
  const [country, setCountry] = useState('tw');
  const [category, setCategory] = useState('general')
  const [index, setIndex] = useState(0);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [apiIndex, setApiIndex] = useState(0);

  const apiKeys = ['1b5cec1415c84775bb71b57f1ccba41b', 'eacea2f731dc70c26dbb0095abbf7bcb', '1e7e3452b1b00cf9fbad0be881bc9275', '023ade82b9d596fc9170e92e7f51a436',
    '706b228dbcddffb30a6a3b539666a907', 'c5ea8ec81f8474702851abd9e4812639', 'e231430dfd4d1d9ee4415bed2761fba3']

  const fetchData = async () => {
    try {
      const res = await fetch(`https://gnews.io/api/v4/top-headlines?category=${category}&country=${country}&apikey=${apiKeys[apiIndex]}`);
      if (!res.ok) { // 檢查授權是否成功
        console.log('Api Key Index: ' + apiIndex);
        setApiIndex((apiIndex + 1) % apiKeys.length);
        throw new Error(`API 請求失敗，狀態碼：${res.status}`); // 如果不成功，拋出錯誤
      }
      const data = await res.json();
      setArticles(data.articles);
    } catch (err) {
      console.log('Error: ' + err);
    } finally {
      setLoading(false);
      console.log(loading)
    }
  }
  useEffect(() => {
    setLoading(true);
    fetchData();
    setIndex(0);
  }, [country, category, apiIndex])

  const clickPre = () => {
    if (index === 0) return;
    let card = `.card${index - 1}`;
    gsap.to(card, {
      x: 0,
      opacity: 1,
      skewX: 0,
      duration: .3,
    })
    setIndex(index - 1);
  }

  const clickNext = () => {
    if (index === 9) return;
    let card = `.card${index}`;
    gsap.to(card, {
      x: "-200vw",
      opacity: 0.5,
      skewX: 30,
      duration: .3,
    })
    setIndex(index + 1);
  }


  return (
    <>
      <div className='2xl:w-2/4 xl:w-2/3 h-screen mx-auto shadow  bg-base-100'>
        <Navbar />
        <Badge country={country} category={category} />

        {loading || articles === undefined ?
          <span className="loading loading-spinner loading-lg text-primary
          absolute top-[35vh] left-[45vw] lg:left-[49vw]"></span>
          : articles.map((article, i) => (
            <div key={i} className={`mx-auto w-[80vw] md:w-[50vw] lg:w-full relative flex justify-center card${i}`}
              style={{ zIndex: `${20 - i}` }}
            >
              <Card article={article} />
            </div>
          ))}

        <div className="div-behindCard h-[56vh] lg:h-[70vh] invisible"></div>

        <div className='flex justify-center'>
          <Buttons setCountry={setCountry} setCategory={setCategory} />
        </div>

        <div className="divider m-2 w-5/6 mx-auto"></div>

        <div className="join grid grid-cols-2 mx-6 gap-1">
          <button className="join-item btn bg-neutral text-[oklch(var(--nc))] shadow" onClick={clickPre}>上一則</button>
          <button className="join-item btn bg-neutral text-[oklch(var(--nc))] shadow" onClick={clickNext}>下一則</button>
        </div>

      </div >

    </>
  )
}

export default App
