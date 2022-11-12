import React from 'react'

const home = () => {
  return (
    <div className='homePageWrapper'>
        <div className='formWrapper'>
            <img src='/logo192.png' alt="logo" className='homePagelogo' />
            <h4 className='mainLabel'>Paste invitation ROOM ID</h4> 

            <div className='inputGroup'>

                <input 
                    type="text" 
                    className='inputBox' 
                    placeholder='ROOM ID'
                />

                <input
                    type="text" 
                    className='inputBox' 
                    placeholder='Username'
                />

                <button className='btn joinBtn'>Join</button>

                <span className='createInfo'>
                    If you don't have an invite, then create &nbsp;
                        <a href='' className='createNewBtn'>
                            new room
                        </a>
                </span>
            
            </div>
        </div>

        <footer>
            <h4>
                Built by &nbsp;
                <a href='https://github.com/VirajRaundal'>Viraj Raundal</a>
            </h4> 
        </footer>
    </div>

  )
}

export default home