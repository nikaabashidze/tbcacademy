import React from 'react'
import './cardsList.css'
import Card from '../../components/cards/card'

import BlueButton from '../../components/button/blueButton'
import ios from '../../assets/image/courses/ios.webp'
import react from '../../assets/image/courses/react.webp'
import intropython from '../../assets/image/courses/intropython.webp'
import advancedpython from '../../assets/image/courses/advancedpython.webp'
import advancedcyb from '../../assets/image/courses/advancedcyb.webp'
import tot from '../../assets/image/courses/tot.webp'
import blockchain from '../../assets/image/courses/blockchain.webp'
import devops from '../../assets/image/courses/devops.webp'
import infosecgov from '../../assets/image/courses/infosecgov.webp'



const data = [
  {
     image: ios, 
     name: "iOS Development",
      valid: 'რეგისტრაცია დასრულებულია',
      buttonComponent: <BlueButton text="კურსის დეტალები"  />
      },

  { image: react, 
    name: "React", 
    valid: 'რეგისტრაცია დასრულებულია',
    buttonComponent: <BlueButton text="კურსის დეტალები"  />
     },

  { image: intropython,
     name: "Intro to Python",
     valid: 'რეგისტრაცია დასრულებულია',
     buttonComponent: <BlueButton text="კურსის დეტალები"  />
    },

  { image: advancedpython,
     name: "Advanced Python", 
     valid: 'რეგისტრაცია დასრულებულია',
     buttonComponent: <BlueButton text="კურსის დეტალები"  />
    },

    { image: advancedcyb,
        name: " Advanced Cybersecurity Course", 
        valid: 'რეგისტრაცია დასრულებულია',
        buttonComponent: <BlueButton text="კურსის დეტალები"  />
       },

       { image: tot,
        name: "ToT - Training of Trainers", 
        valid: 'რეგისტრაცია დასრულებულია',
        buttonComponent: <BlueButton text="კურსის დეტალები"  />
       },


       { image: blockchain,
        name: "Blockchain", 
        valid: 'რეგისტრაცია დასრულებულია',
        buttonComponent: <BlueButton text="კურსის დეტალები"  />
       },


       { image: devops,
        name: "DevOps", 
        valid: 'რეგისტრაცია დასრულებულია',
        buttonComponent: <BlueButton text="კურსის დეტალები"  />
       },

       { image: infosecgov,
        name: " Information Security Governance", 
        valid: 'რეგისტრაცია დასრულებულია',
        buttonComponent: <BlueButton text="კურსის დეტალები"  />
       },
    
];





export default function cardList() {
  
 
  
  return (
    <div>
        <div className='wrapper'>

          <div className='bookDiv'>
            <div className='cards'>

            {data.map((card, index) => (
              <Card
                key={index}
               name={card.name}
                 image={card.image}
                 valid={card.valid}
                 buttonComponent={card.buttonComponent}
              />
            ))}

          </div>

          </div>  
          </div>
        </div>




  )
}