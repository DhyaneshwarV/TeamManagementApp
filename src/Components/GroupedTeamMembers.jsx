import React,{useState} from 'react'
import Css from './GroupedTeamMembers.module.css'
const GroupedTeamMembers = ({employees,selectTeam,setSelectTeam}) => {
    const [groupedEmployees, setGroupedEmployees] = useState(groupTeamMembers());
    function groupTeamMembers(){
        var teams=[]
        var teamAMembers=employees.filter(employee=>employee.teamName==='TeamA')
        var teamA={team:'TeamA',members:teamAMembers,expand:selectTeam==='TeamA'?false:true}
        teams.push(teamA)

        var teamBMembers=employees.filter(employee=>employee.teamName==='TeamB')
        var teamB={team:'TeamB',members:teamBMembers,expand:selectTeam==='TeamB'?false:true}
        teams.push(teamB)

        var teamCMembers=employees.filter(employee=>employee.teamName==='TeamC')
        var teamC={team:'TeamC',members:teamCMembers,expand:selectTeam==='TeamC'?false:true}
        teams.push(teamC)

        var teamDMembers=employees.filter(employee=>employee.teamName==='TeamD')
        var teamD={team:'TeamD',members:teamDMembers,expand:selectTeam==='TeamD'?false:true}
        teams.push(teamD)

        return teams
    }
    const handleTeamClick=(event)=>{
        var transformedgroup=groupedEmployees.map(employe=>employe.team ===event.currentTarget.id ? {...employe,expand:!employe.expand}:employe)
        setGroupedEmployees(transformedgroup)
        setSelectTeam(event.currentTarget.id)
        console.log(transformedgroup)
    }
  return (
    <div>
      {
        groupedEmployees.map(item=>{
            return(
                <div key={item.team} style={{cursor:"pointer"}}>
                    <h3 id={item.team} className={Css.title} onClick={handleTeamClick}>
                        Team Name: {item.team}
                    </h3>
                    <div  className={item.expand===true? Css.expand:Css.notexpand }>
                        {
                            item.members.map(member=>{
                                return(
                                    <div >
                                        <h5><b>Full Name: </b>{member.fullName}</h5>
                                        <p>Designation: {member.designation}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )
        })
      }
    </div>
  )
}

export default GroupedTeamMembers
