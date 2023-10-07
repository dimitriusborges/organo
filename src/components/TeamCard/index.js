import './TeamCard.css'
import TeamMemberCard from "../TeamMemberCard";
import hexToRgba from "hex-to-rgba";

//you can use any name, not only props. Props is an object with all attributes
const TeamCard = (teamData) => {
    return (
        (teamData.teamMembers.length > 0) &&

        //style = inline style. Receives an object
          <section className="teamCard" style={{backgroundColor: hexToRgba(teamData.primaryColor, 0.5)}}>
              <input type='color' className='input-cor'
                     value={teamData.secondaryColor}
                     onChange={evt => teamData.onColorChange(evt.target.value, teamData.nome)}/>
              <h3 style={{borderColor: teamData.secondaryColor}}>{teamData.nome}</h3>
              <div className='teamMembers'>
                  {
                      teamData.teamMembers.map(teamMember => {
                              return (<TeamMemberCard key={teamMember.nome}
                                                nome={teamMember.nome}
                                                cargo={teamMember.cargo}
                                                img={teamMember.imagem}
                                                bgColor={teamData.secondaryColor}
                                                onRemoving = {teamData.onMemberRemoving}
                              />)
                          }
                      )
                  }
              </div>
          </section>
    )
}

export default TeamCard