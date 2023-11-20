import ExibirTexto from '../exibirTexto/ExibirTexto';
import useState from 'react';

const Formulario = () => {

    const [nome, setNome] = useState("");
    
    return(
    <div>

        <form>
            Informe seu nome <input type ="text" 
            value={nome} onchange={(e) => setNome(e.target.value)} />
        </form>
        <ExibirTexto nome={nome} />

    </div>);




}

export default Formulario
