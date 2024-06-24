import { IColaborador } from '../../shared/interface/IColaborador'
import './Colaborador.css'

interface ColaboradorProps {
    colaboradores: IColaborador
    corDeFundo: string
}

const Colaborador = ({ colaboradores, corDeFundo }: ColaboradorProps) => {
    return (<div className='colaborador'>
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img src={colaboradores.imagem} alt={colaboradores.nome} />
        </div>
        <div className='rodape'>
            <h4>{colaboradores.nome}</h4>
            <h5>{colaboradores.cargo}</h5>
        </div>
    </div>)
}

export default Colaborador