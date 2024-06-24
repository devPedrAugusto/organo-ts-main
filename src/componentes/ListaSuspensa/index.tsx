import './ListaSuspensa.css'

interface ListaSuspensaProps {
    label: string,
    aoAlterado: (valor: string) => void,
    obrigatorio: boolean,
    valor: string,
    itens: string[]
}

const ListaSuspensa = ({ label, aoAlterado, obrigatorio, valor, itens }: ListaSuspensaProps) => {
    return (
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select onChange={evento => aoAlterado(evento.target.value)} required={obrigatorio} value={valor}>
                <option value=""></option>
                {itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa