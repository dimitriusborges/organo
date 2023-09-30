import Banner from "./components/Banner";
import Form from "./components/Form";
import {useState} from "react";
import TeamCard from "./components/TeamCard";
import TeamMemberCard from "./components/TeamMemberCard";

function App() {

    const teams = [
        {
            nome: 'Programação',
            corPrimaria: '#57C278',
            corSecundaria: '#D9F7E9',
        },
        {
            nome: 'Front-End',
            corPrimaria: '#82CFFA',
            corSecundaria: '#E8F8FF',
        },
        {
            nome: 'Data Sciense',
            corPrimaria: '#A6D157',
            corSecundaria: '#F0F8E2',
        },
        {
            nome: 'Devops',
            corPrimaria: '#E06B69',
            corSecundaria: '#FDE7E8',
        },
        {
            nome: 'UX e Design',
            corPrimaria: '#D86EBF',
            corSecundaria: '#FAE5F5',
        },
        {
            nome: 'Mobile',
            corPrimaria: '#FEBA05',
            corSecundaria: '#FFF5D9',
        },
        {
            nome: 'Inovação e Gestão',
            corPrimaria: '#FF8A29',
            corSecundaria: '#FFEEDF',
        }
    ]

    const [contractors, setContractors] = useState([])

    const saveContractor = (contractor) => {
        setContractors([...contractors, contractor])
    }

  return (
    <div className="App">
        <Banner/>
        <Form onFormSaving={saveContractor} teams={teams.map(team => team.nome)}/>
        {
            teams.map(team =>
                <TeamCard key={team.nome}
                          nome={team.nome}
                          primaryColor={team.corPrimaria}
                          secondaryColor={team.corSecundaria}
                          teamMembers={contractors.filter(contractor => contractor.time === team.nome)}
                >
                </TeamCard>
            )
        }
    </div>
  );
}

export default App;
