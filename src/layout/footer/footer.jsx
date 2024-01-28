import './footer.css';
import facebook from '../../assets/image/facebookLogo.webp'
import youtube from '../../assets/image/youtubeLogo.webp'
import footerLogo from '../../assets/image/footerLogo.webp'


function App() {
  return (
    <div className="footer">
     <div> 
            <img src={footerLogo} alt="" id='footerLogo' />
        <ul>
            <li>© 2023 ყველა უფლება დაცულია</li>
            <li>წესები და პირობები</li>
        </ul>

     </div>
     

     <div className='socialParent'>
        <ul className='social'>
           <li><img src={facebook} alt="Logo" className='socialMediaLogo' /></li>
           <li><img src={youtube} alt="Logo" className='socialMediaLogo' /></li>
        </ul>
        <button className='messaggeUsButton'>მოგვწერე</button>
      </div>

      
    </div>
  );
}

export default App;
