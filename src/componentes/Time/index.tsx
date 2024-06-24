import Colaborador from '../Colaborador'
import { IColaborador } from '../../shared/interface/IColaborador'
import './Time.css'
import { Fragment } from 'react/jsx-runtime'

interface TimeProps {
    corSecundaria: string,
    colaboradores: IColaborador[],
    corPrimaria: string,
    nome: string
}

const Time = ({ corSecundaria, colaboradores, corPrimaria, nome }: TimeProps) => {
    const css = { backgroundColor: corSecundaria }

    return (
        (colaboradores.length > 0) ? <section className='time' style={css}>
            <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map(colaborador => <Colaborador corDeFundo={corPrimaria} key={colaborador.nome} colaboradores={colaborador} />)}
            </div>
        </section>
            : <Fragment />
    )
}

export default Time