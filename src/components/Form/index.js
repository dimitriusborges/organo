import './Form.css'
import TextField from "../TextField";
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

    const onSaving = (evt) =>{
        evt.preventDefault()
        props.onFormSaving({nome, cargo, imagem, time})
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="masterForm">
            <form onSubmit={onSaving}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField
                    required ={true}
                    label = "Nome"
                    placeholder="Digite o seu nome"
                    val = {nome}
                    onChanging = {val => setNome(val)}
                />
                <TextField required ={true}
                           label = "Cargo"
                           placeholder="Digite o seu cargo"
                           val = {cargo}
                           onChanging = {val => setCargo(val)}
                />
                <TextField
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
        </section>
    )
}

export default Form