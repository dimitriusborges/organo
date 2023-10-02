import './TeamCard.css'
import TeamMemberCard from "../TeamMemberCard";

const TeamCard = (props) => {
    const css = { backgroundColor:props.secondaryColor }
    return (
        (props.teamMembers.length > 0) &&

        //style = inline style. Receives an object
          <section className="teamCard" style={css}>
              <h3 style={{borderColor: props.primaryColor}}>{props.nome}</h3>
              <div className='teamMembers'>
                  {
                      props.teamMembers.map(teamMember =>

                        <TeamMemberCard key={teamMember.nome}
                                        nome={teamMember.nome}
                                        cargo={teamMember.cargo}
                                        img={teamMember.imagem}
                                        bgColor={props.primaryColor}
                        />
                      )
                  }
              </div>
          </section>
    )
}

export default TeamCard