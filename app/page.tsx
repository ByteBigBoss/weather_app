'use client'
import Image from 'next/image';
import axios from 'axios';
import { use, useDeferredValue, useEffect, useMemo, useState } from 'react';


export default function Home() {

  const [searchCity, setSearchCity] = useState('');


  const city = useDeferredValue(searchCity);

  const [weatherDes, setWeatherDes] = useState('Wheaher State');
  const [foundCity, setFoundCity] = useState('Search a City');
  const [temp, setTemp] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [seaLevel, setSeaLevel] = useState(0);
  const [icon, setIcon] = useState('');
  const [background, setBackground] = useState('');
  const [status, setStatus] = useState('');


  const [arrayObj, setArrayObj] = useState([]);


  const [images, setImages] = useState([]);

  // request
  const request = async () => {

    await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a1a2c317ea3669d0b6f6c15b8bec87a8`)
      .then((res) => {

        let data = res.data;

        let weather = data.weather?.[0];

        setWeatherDes(weather?.description);
        setFoundCity(data.name);
        setTemp(data.main.temp);
        setSpeed(data.wind.speed);
        setHumidity(data.main.humidity);
        setSeaLevel(data.main.sea_level);
        setIcon(weather.icon);
        setStatus(weather?.main);

        requestImage();
      })
      .catch((err) => {
        console.log(err);
      });

  }

  // const array:any = [];

  const requestImage = async () => {

    await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${city}&client_id=xHc6OTcGK5m3uduRCDRzPwPi0KLE-Bv3CRqJNp-x1qA`).then((res) => {

      

      const resArray = res.data.results;

      

      // for (let img of resArray) {
        
      //   let obj = {
      //     "key":img.id,
      //     "url":img.urls.full
      //   }

      //   array.push(obj);

        
      // }

     setImages(resArray)


    }).catch(() => {

    })

  }


  const requestBackgroundImage =async () => {
    
    await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${status}&client_id=xHc6OTcGK5m3uduRCDRzPwPi0KLE-Bv3CRqJNp-x1qA`)
    .then((res) => {
  
      setBackground(res.data.results?.[0].urls.full);

    }).catch(()=>{

    });
  

  }

  useMemo(()=>{ requestBackgroundImage();},[request, status])


  return (
    <section className='w-full min-h-screen  flex flex-col justify-center items-center box-border p-[50px] relative'>

        <img src={background} className='w-full h-full absolute -z-50 blur-[3px] opacity-80'/>


      {/* City */}
      <div className=' flex flex-col items-center'>
        <div className='w-full flex flex-col lg:flex-row items-center gap-[40px] '>
          <img src={icon === '' ? '/cloudy.png' : `http://openweathermap.org/img/wn/${icon}@2x.png`} alt='icon' className='w-[192px] h-[192px]' />
          <div className='text-[64px] font-bold md:text-[128px]'>{foundCity}</div>
        </div>
        <div className='text-[18px] font-medium'>{weatherDes}</div>
      </div>


      <div className='pb-[100px] pt-[40px] w-full flex  justify-center'>
        <input type="text" className='w-[60%] px-[24px] text-[18px] font-medium border-[1px] h-[60px] rounded-l-full border-slate-300' placeholder='Type City' onChange={(event) => { event.preventDefault, setSearchCity(event.target.value) }} />

        <button className='h-[60px] px-[40px] font-bold text-[18px] bg-slate-500 text-white rounded-r-full' onClick={request}>Search</button>
      </div>


      <div className='flex items-center justify-center gap-[100px] flex-wrap'>
        {/* temp */}
        <div className='flex items-center gap-[20px]'>
          <div className='w-[40px] h-[40px] relative'></div>
          <div className='flex flex-col items-center'>

            <div className='text-[24px] font-bold'>{temp} F</div>
            <div className='text-[15px] font-medium'>Temp</div>
          </div>
        </div>

        {/* temp */}
        <div className='flex items-center gap-[20px]'>
          <div className='w-[40px] h-[40px] bg-slate-700'></div>
          <div className='flex flex-col items-center'>

            <div className='text-[24px] font-bold'>{speed} MPH</div>
            <div className='text-[15px] font-medium'>Speed</div>
          </div>
        </div>

        {/* temp */}
        <div className='flex items-center gap-[20px]'>
          <div className='w-[40px] h-[40px] bg-slate-700'></div>
          <div className='flex flex-col items-center'>

            <div className='text-[24px] font-bold'>{humidity}%</div>
            <div className='text-[15px] font-medium'>Humidity</div>
          </div>
        </div>

        {/* temp */}
        <div className='flex items-center gap-[20px]'>
          <div className='w-[40px] h-[40px] bg-slate-700'></div>
          <div className='flex flex-col items-center'>

            <div className='text-[24px] font-bold'>{seaLevel} M</div>
            <div className='text-[15px] font-medium'>Sea Level</div>
          </div>
        </div>

      </div>

      {/* image gallery */}
      <div className='w-full flex flex-col items-center'>
        <div className='w-full 2xl:w-auto overflow-hidden   h-auto flex gap-[20px] overflow-x-scroll mt-[120px] justify-start'>


          {images && images.map((data:any, index:number) => (

            <div key={data.id} className='w-[280px] h-[280px] bg-slate-100 rounded-[8px] border-[1px] border-slate-200 flex-shrink-0'>
              <img src={data.urls.full} alt='icon' className='w-[280px] h-[280px]' />
            </div>

          ))}





        </div>
      </div>

    </section>
  )
}
