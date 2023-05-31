import PropTypes from 'prop-types';

export function Componente (props){
    return <>
    <h1>Nombre: {props.name}</h1>
    <h2>Apellido: {props.lastName}</h2>
    <h3>Documento: {props.document}</h3>
    </>
}

export function Button ({text, name = "Some User"}){
    return <button>
        {text} - {name}
    </button>
}

Button.propTypes = {
    text: PropTypes.string
}

// Button.defaultProps = { //Valor por defecto para props
//     name: "Some User"
// }
