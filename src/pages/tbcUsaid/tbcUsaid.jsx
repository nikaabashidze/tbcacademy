import React from 'react'
import './tbcUsaid.css'
import Header from '../../layout/header/header'
import Footer from '../../layout/footer/footer'
import Bluebutton from '../../components/button/blueButton'
import CardList from '../../layout/cardsList/cardList'
import Slider from '../../layout/slider/slider'
import Faq from '../../layout/faq/faq'

const tbcUsaid = () => {
  return (
    <div className='tbcUsaid'>
            <Header/>
          <div className='usaidImage'>
              <div className='usaidImagetext'>
              <h1>TBC x USAID</h1>
               <h1>ᲢᲔᲥᲜᲝᲚᲝᲒᲘᲣᲠᲘ ᲒᲐᲜᲐᲗᲚᲔᲑᲘᲡᲗᲕᲘᲡ</h1>
              </div>  
          </div>

          <div className='usaidText'>
            <p>
            „ TBC x USAID - ტექნოლოგიური განათლებისთვის “ პროგრამა 
            საინფორმაციო ტექნოლოგიებით დაინტერესებულ ადამიანებს გთავაზობთ სრულად დაფინანსებულ
            ონლაინ საგანმანათლებლო პრაქტიკულ კურსებს  სხვადასხვა ICT მიმართულებით. 
            წარმატებულ კურსდამთავრებულებს ეძლევათ შესაძლებლობა დასაქმდნენ თიბისისა და მის პარტნიორ კომპანიებში.
            <br/>
            <br/>
            <Bluebutton text="გაიგე მეტი"/>
          </p>
          </div>


        <div className='usaidCards'>
              <div className='cardsCont'>
              <h6>სასწავლო კურსები</h6>
                
              <div className='cards'>
                <CardList/>

              </div>
              </div>
        </div>





        <div className='projectPartners'>
        <h6>პროექტის პარტნიორები</h6>
            <Slider/>
        </div>



      <div className='questions'>
          <Faq/>

      </div>



      <Footer/>
    </div>
  )
}

export default tbcUsaid
