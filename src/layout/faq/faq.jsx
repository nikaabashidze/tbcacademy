import React, { useState } from 'react';
import './faq.css';
import BlueButton from '../../components/button/blueButton'

function FAQ() {
  // State to manage which questions are currently open
  const [openQuestions, setOpenQuestions] = useState([]);

  // Function to toggle the open state of a question
  const toggleQuestion = (id) => {
    if (openQuestions.includes(id)) {
      setOpenQuestions(openQuestions.filter((q) => q !== id));
    } else {
      setOpenQuestions([...openQuestions, id]);
    }
  };

  return (
      <div className="faq-container">
        <div className='faqHeaderText'> 
            <h1>ხშირად დასმული კითხვები</h1>
            <BlueButton text="ყველა კითხვა"  />
        </div>
      <div className="faq-questions">
        {/* Map over your FAQ data to generate question components */}
        {faqData.map((item, index) => (
            
          <div className="faq-question" key={index}>
            <input
              type="checkbox"
              id={`q${index}`}
              checked={openQuestions.includes(`q${index}`)}
              onChange={() => toggleQuestion(`q${index}`)}
            />
            <label className="faq-header" htmlFor={`q${index}`}>
              {item.question}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="faq-icon"
              >
                <path d="M8.14644661,14.858836 C7.95118446,14.6635739 7.95118446,14.3469914 8.14644661,14.1517292 L12.4989857,9.79289322 L16.8573469,14.1517292 C17.052609,14.3469914 17.052609,14.6635739 16.8573469,14.858836 C16.6620847,15.0540981 16.3455022,15.0540981 16.1502401,14.858836 L12.4989857,11.2071068 L8.85355339,14.858836 C8.65829124,15.0540981 8.34170876,15.0540981 8.14644661,14.858836 Z" />
              </svg>
            </label>
            {/* Render the answer only if the question is open */}
            {openQuestions.includes(`q${index}`) && (
              <div className="faq-answer">
                <p>{item.answer}</p>
                <p>{item.answer2}</p>
                <p>{item.answer3}</p>
                <p>{item.answer4}</p>
                <p>{item.answer5}</p>
                <p>{item.answer6}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Sample FAQ data
const faqData = [
  {
    question: 'როგორ ხდება კურსებზე რეგისტრაცია და შერჩევა?',
    answer: 'კურსზე რეგისტრაციისთვის უნდა გაიარო რამდენიმე ეტაპი:',
    answer2:'I ეტაპი - პირველ ეტაპზე საჭიროა, შეავსო სასურველი კურსისთვის განკუთვნილი სარეგისტრაციო ფორმა, რომელიც განთავსებულია კურსის შიდა გვერდზე. კურსზე რეგისტრაციის დასრულების შემდეგ დაიწყება შემოსული განცხადებების გადარჩევა. ',
    answer3:'II ეტაპი - შერჩევის მეორე ეტაპი კურსების მიხედვით განსხვავებულია, ზოგიერთი კურსისთვის მოიცავს პრე-ტესტს, ზოგიერთ კურსზე კი უნარების ტესტს, სადაც მინიმალური ზღვარის გადალახვის შემთხვევაში გადახვალ შერჩევის შემდეგ ეტაპზე.',
    answer4:'III ეტაპი - მესამე ეტაპი კურსების მიხედვით განსხვავდება: Advance კურსებზე, სადაც მოითხოვება გარკვეული ტექნიკური ცოდნა, მონაწილეებმა უნდა დაწერონ ტექნიკური ტესტი ცოდნის დონის შესამოწმებლად, ხოლო კურსებზე, სადაც რაიმე ტიპის წინასწარი ცოდნა მოთხოვნილი არ არის უნდა შეასრულოთ ტექნიკური დავალება, რაც თქვენი კვლევისა და თვითსწავლის უნარს ამოწმებს.',
    answer5:'IV ეტაპი - შერჩევის ბოლო მეოთხე ეტაპი მოიცავს გასაუბრებას შესარჩევ კომისიასთან. გასაუბრების წარმატებით გავლის შემთხვევაში ჩაირიცხებით კურსზე და გაფორმდება შესაბამისი ხელშეკრულება.',
    answer6:'* სანამ კურსზე დარეგისტრირდები მნიშვნელოვანია, ყურადღებით წაიკითხო კურსის აღწერა, ნახო რას ისწავლი კურსის განმავლობაში და გაიგო გააჩნია თუ არა კურსს დასწრების წინაპირობა. ',

},

  {
    question: 'შემიძლია თუ არა ერთზე მეტ კურსზე რეგისტრაცია?',
    answer:'TBC X USAID ტექნოლოგიური განათლებისთვის პროგრამაში თითოეულ კანდიდატს აქვს მხოლოდ ერთი კურსის გავლის შესაძლებლობა. გარდა Information Security და Python კურსებისა, სადაც Basic დონის გავლის შემდეგ შესაძლებელია სწავლის გაგრძელება Advance დონეზე.',



},
  {
    question: 'რა ღირს სწავლა პროგრამის ფარგლებში?',
    answer:'პროგრამის ფარგლებში კურსებზე სწავლა სრულიად დაფინანსებულია თიბისი ბანკისა და USAID-ის მიერ.',


},
  // Add more FAQ items here
];

export default FAQ;
