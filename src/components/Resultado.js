import styled from '@emotion/styled'

const Mensaje = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`
const ResultadoCotizacion = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #08a508;
    background-color: rgb(141, 237, 127);
    margin-top: 1rem;
    position: relative;
`
const Total = styled.p`
    color: #00838f;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin:0;
    font-size: 1.2em;
`

const Resultado = ({cotizacion}) => {

    return (

        (cotizacion === 0) 
            ? <Mensaje>Elige marca, año y tipo de seguro</Mensaje> 
            : (
                <ResultadoCotizacion>
                    <Total>El total es: $ {cotizacion}</Total>
                </ResultadoCotizacion>
            )

    )
}
 
export default Resultado;