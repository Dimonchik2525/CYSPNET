import * as React from "react"

export const Statistics = () => {
   let mainArray = [
      {
         number: '112',
         text: 'Турниров проведено',
      },
      {
         number: '1789',
         text: 'Матчей сыграно',
      },
      {
         number: '5800 $',
         text: 'Призового фонда выплачено'
      },
      {
         number: '3872',
         text: 'Пользователей зарегистрировано',
      },
   ]
   let arr = []

   mainArray.map((item, ind) => {
      arr.push(
         <div key={ind} className="statistics__content__item">
            <div className="statistics__content__item__number">{item.number}</div>
            <div className="statistics__content__item__text">{item.text}</div>
            {/* <div className="statistics__content__item__dott"></div> */}
         </div>
      )
   })

   return (
      <div id="statistics" className="statistics">
         <div className="statistics__container">
            <div className="statistics__block">
               <div className="statistics__content">
                  <div className="statistics__content__img">
                     <div className="statistics__content__img__wrapper">
                        <img src="img/statistics/statictics__main__circle.png" alt="" />
                     </div>
                     <div className="statistics__content__img__wrapper">
                        <img src="img/statistics/statictics__main__circle.png" alt="" />
                     </div>
                     <div className="statistics__content__img__wrapper">
                        <img src="img/statistics/statictics__main__circle.png" alt="" />
                     </div>
                     <div className="statistics__content__img__wrapper">
                        <img src="img/statistics/statictics__main__circle.png" alt="" />
                     </div>
                  </div>
                  {arr}
               </div>
               <div className="statistics__img">
                  <img src="img/statistics/statistics__1.png" alt="" />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Statistics;