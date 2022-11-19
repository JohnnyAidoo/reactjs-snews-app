import React, { useState } from 'react';
import Template from '../components/newsTemplate';

function TrendNews() {

    const [news, setnews] = useState([])

    var url = 'https://newsapi.org/v2/everything?' +
          'q=trend&' +
          'language=en&'+
          'from=2022-11-19&' +
          'sortBy=popularity&' +
          'apiKey=bf3266f7d52545aca6dc97a48bfbadd2';

var req = new Request(url);

fetch(req)
    .then((res) =>{
        res.json().then((data) =>{
            setnews(data.articles)
        })
    },)
    return ( 
        <>
        <div className='grid'>
            {news.map((info) =>(
                <Template 
                key={info.url}
                image ={info.urlToImage} 
                title={info.title}
                description={info.description}
                />
            ))}
        </div>
        </>
     );
}

export default TrendNews;