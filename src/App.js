import Banner from "./components/Banner";
import Form from "./components/Form";
import {useState} from "react";
import TeamCard from "./components/TeamCard";
import {v4 as uuidv4} from 'uuid';


function App() {

    const teamsSetup = [
        {
            id: uuidv4(),
            nome: 'Programação',
            color: '#D9F7E9',
        },
        {
            id: uuidv4(),
            nome: 'Front-End',
            color: '#E8F8FF',
        },
        {
            id: uuidv4(),
            nome: 'Data Sciense',
            color: '#F0F8E2',
        },
        {
            id: uuidv4(),
            nome: 'Devops',
            color: '#FDE7E8',
        },
        {
            id: uuidv4(),
            nome: 'UX e Design',
            color: '#FAE5F5',
        },
        {
            id: uuidv4(),
            nome: 'Mobile',
            color: '#FFF5D9',
        },
        {
            id: uuidv4(),
            nome: 'Inovação e Gestão',
            color: '#FFEEDF',
        }
    ]

    const [teams, setTeams] = useState(teamsSetup)

    const [contractors, setContractors] = useState([])

    const saveContractor = (contractor) => {
        setContractors([...contractors, contractor])
    }

    const onTeamMemberRemoving = (memberId) => {
        setContractors(contractors.filter(
            contractor => contractor.id !== memberId
        ))
    }

    const onChangeTeamColor = (color, teamId) => {
        setTeams(teams.map( team => {
                if (team.id === teamId) {
                    team.color = color
                }
                return team;
            }
        ))
    }

    return (
    <div className="App">
        <Banner/>
        <Form onFormSaving={saveContractor} teams={teams.map(team => team.nome)}/>
        {
            teams.map(team =>
                <TeamCard key={team.id}
                          id={team.id}
                          nome={team.nome}
                          primaryColor={team.color}
                          secondaryColor={team.color}
                          teamMembers={contractors.filter(contractor => contractor.time === team.nome)}
                          onMemberRemoving={onTeamMemberRemoving}
                          onColorChange={onChangeTeamColor}
                >
                </TeamCard>
            )
        }
    </div>
    );
}

export default App;
