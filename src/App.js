import Banner from "./components/Banner";
import Form from "./components/Form";
import {useState} from "react";
import TeamCard from "./components/TeamCard";


function App() {

    const teamsSetup = [
        {
            nome: 'Programação',
            color: '#D9F7E9',
        },
        {
            nome: 'Front-End',
            color: '#E8F8FF',
        },
        {
            nome: 'Data Sciense',
            color: '#F0F8E2',
        },
        {
            nome: 'Devops',
            color: '#FDE7E8',
        },
        {
            nome: 'UX e Design',
            color: '#FAE5F5',
        },
        {
            nome: 'Mobile',
            color: '#FFF5D9',
        },
        {
            nome: 'Inovação e Gestão',
            color: '#FFEEDF',
        }
    ]

    const [teams, setTeams] = useState(teamsSetup)

    const [contractors, setContractors] = useState([])

    const saveContractor = (contractor) => {
        setContractors([...contractors, contractor])
    }

    const onTeamMemberRemoving = () => {
        console.log("DIE")
    }

    const onChangeTeamColor = (color, teamName) => {
        setTeams(teams.map( team => {
                if (team.nome === teamName) {
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
                <TeamCard key={team.nome}
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
