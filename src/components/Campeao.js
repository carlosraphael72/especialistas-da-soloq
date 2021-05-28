import React from 'react'

const Campeao = ({ campeao }) => {
    return (
        <div className='campeao'>
            <img className='icone' src={process.env.PUBLIC_URL + `/imagens/80px-${campeao}Square.png`} />
            <h2>{campeao}</h2>

        </div>
    )
}

export default Campeao
