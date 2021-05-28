// import imgLogo from 'D:/Especialistas da SoloQ/especialistas-da-soloq/src/img/mono_champions.png'
import imgLogo from '../img/mono_champions.png'

const Logo = () => {
    return (
        <div className='div_logo'>
            <figure>
                <img className='logo' src={imgLogo} ></img>
            </figure>
        </div>
    )
}

export default Logo
