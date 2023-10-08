import './Form.css'
import Field from "../Field";
import SelectionList from "../SelectionList";
import Button from "../Button";
import {useState} from "react";

const Form = (props) => {
    //React only changes a component in the DOM if its state, not just its value, changes. To do so
    //we create a state var controlled by a hook, which lets you add react state to a function component
    const[nome, setNome] = useState('')
    const[cargo, setCargo] = useState('')
    const[imagem, setImagem] = useState('')
    const[time, setTime] = useState('')

    const [teamName, setTeamName] = useState('')
    const [teamColor, setTeamColor] = useState('')

    const onSavingContractor = (evt) =>{
        evt.preventDefault()
        props.onContractorFormSaving({nome, cargo, imagem, time})
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    const onSavingTeam = (evt) => {
        evt.preventDefault()
        props.onTeamFormSaving({name: teamName, color: teamColor})
        setTeamName('')
        setTeamColor('')
    }

    return (
        <section className="masterForm">
            <form onSubmit={onSavingContractor}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Field
                    required ={true}
                    label = "Nome"
                    placeholder="Digite o seu nome"
                    val = {nome}
                    onChanging = {val => setNome(val)}
                />
                <Field required ={true}
                       label = "Cargo"
                       placeholder="Digite o seu cargo"
                       val = {cargo}
                       onChanging = {val => setCargo(val)}
                />
                <Field
                    label = "Imagem"
                    placeholder="Digite o endereço da imagem"
                    val = {imagem}
                    onChanging = {val => setImagem(val)}
                />
                <SelectionList
                    required ={true}
                    label = "Encontre seu Squad"
                    items = {props.teams}
                    val = {time}
                    onChanging={val => setTime(val)}
                />
                <Button>
                    Criar card
                </Button>
            </form>
            <form onSubmit={onSavingTeam}>
                <h2>Preencha os dados para criar um novo time</h2>
                <Field
                    required ={true}
                    label = "Nome"
                    placeholder="Digite o nome do time"
                    val = {teamName}
                    onChanging = {val => setTeamName(val)}
                />
                <Field required ={true}
                       type = 'color'
                       label = "Cor"
                       placeholder="Digite a cor do time"
                       val = {teamColor}
                       onChanging = {val => setTeamColor(val)}
                />
                <Button>
                    Criar um novo time
                </Button>
            </form>
        </section>
    )
}

export default Form