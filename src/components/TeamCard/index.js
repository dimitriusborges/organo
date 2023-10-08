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
                     onChange={evt => teamData.onColorChange(evt.target.value, teamData.id)}/>
              <h3 style={{borderColor: teamData.secondaryColor}}>{teamData.name}</h3>
              <div className='teamMembers'>
                  {
                      teamData.teamMembers.map(teamMember => {
                              return (<TeamMemberCard key={teamMember.id}
                                                    id = {teamMember.id}
                                                    name={teamMember.name}
                                                    cargo={teamMember.cargo}
                                                    img={teamMember.imagem}
                                                    favorite = {teamMember.favorite}
                                                    bgColor={teamData.secondaryColor}
                                                    onRemoving = {teamData.onMemberRemoving}
                                                    onMemberFavorite={teamData.onMemberFavorite}

                              />)
                          }
                      )
                  }
              </div>
          </section>
    )
}

export default TeamCard