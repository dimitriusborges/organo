import Banner from "./components/Banner";
import Form from "./components/Form";
import {useState} from "react";
import TeamCard from "./components/TeamCard";
import {v4 as uuidv4} from 'uuid';


function App() {

    const teamsSetup = [
        {
            id: uuidv4(),
            name: 'Programação',
            color: '#D9F7E9',
        },
        {
            id: uuidv4(),
            name: 'Front-End',
            color: '#E8F8FF',
        },
        {
            id: uuidv4(),
            name: 'Data Sciense',
            color: '#F0F8E2',
        },
        {
            id: uuidv4(),
            name: 'Devops',
            color: '#FDE7E8',
        },
        {
            id: uuidv4(),
            name: 'UX e Design',
            color: '#FAE5F5',
        },
        {
            id: uuidv4(),
            name: 'Mobile',
            color: '#FFF5D9',
        },
        {
            id: uuidv4(),
            name: 'Inovação e Gestão',
            color: '#FFEEDF',
        }
    ]

    const [teams, setTeams] = useState(teamsSetup)

    const [contractors, setContractors] = useState([])

    const saveContractor = (contractor) => {
        contractor.id = uuidv4()
        contractor.favorite = false
        setContractors([...contractors, contractor])
    }
    const saveTeam = (team) => {
        team.id = uuidv4()
        setTeams([...teams, team])
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

    const onTeamMemberFavoriteAction = (id) => {
        setContractors(contractors.map(contractor => {
                    if (contractor.id === id) {
                        contractor.favorite = !contractor.favorite
                    }
                    return contractor
                }
            )
        )
    }

    return (
    <div className="App">
        <Banner/>
        <Form
            onContractorFormSaving={saveContractor}
            onTeamFormSaving={saveTeam}
            teams={teams.map(team => team.name)}/>
        {
            teams.map(team =>
                <TeamCard key={team.id}
                          id={team.id}
                          name={team.name}
                          primaryColor={team.color}
                          secondaryColor={team.color}
                          teamMembers={contractors.filter(contractor => contractor.time === team.name)}
                          onMemberRemoving={onTeamMemberRemoving}
                          onColorChange={onChangeTeamColor}
                          onMemberFavorite={onTeamMemberFavoriteAction}
                >
                </TeamCard>
            )
        }
    </div>
    );
}

export default App;
