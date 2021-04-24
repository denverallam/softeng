import Committee from './Committee'

const CommitteeList = ({committee}) => {

    return (
        <div className="container row mx-auto">
            {
                committee.map((comm) => (
                    <Committee comm={comm}/>
                ))
            }
        </div>
    )
}

export default CommitteeList
