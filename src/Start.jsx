import instagram from './assets/instagram.png'
import email from './assets/email.png'

function Start() {
  return (
    <div className="start">
        <div>
            Fran Norsworthy
        </div>
        <div>
            <a href='https://www.instagram.com/frannorsworthy/' className='instagram'>
                <img src={instagram} alt='instagram' />
            </a>
            <a href="mailto: wench920@gmail.com" className='instagram'>
                <img src={email} alt='email' />
            </a>
        </div>
    </div>
  )
}

export default Start