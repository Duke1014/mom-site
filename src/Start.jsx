import instagram from './assets/instagram.png'

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
        </div>
    </div>
  )
}

export default Start