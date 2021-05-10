import NavBar from "../../NavBar"
import EditorialBoardList from "./EditorialBoardList"
import { sectionWriters } from '../data/EscolarioOfficerData'
import { Container } from "reactstrap"
import EditorialBoard from "./EditorialBoard"

const Escolario = () => {
    return (
        <Container>
            <NavBar />

            <div className="row d-flex flex-row-reverse">
                <div className="container-fluid blue-bg col-sm-5 mx-auto mt-4 row">
                    <div className="mt-2 px-2">

                        <h4 className="content-mission">ABOUT ESCOLARIO</h4>
                        <p className="text-mission">Escolario is the official publication of Becarios de Santo Tomas, the Sole Thomasian Scholars Association. Managed by the Research and Evaluation Committee Heads alongside the Editorial Board, it serves as a forum for community discussions and a platform for maximized scholars’ participation geared towards the organization’s primary objectives. With the goal of giving Thomasian scholars an established communication armory linked with the organization, Escolario contains original news and articles written by appointed scholars as writers and contributors.
                        Founded in 2015, the publication was first launched online through Wordpress. It was not until 2017 when the publication was formally promulgated through Wixsite. Today, Escolario envisions to be a catalyst of change and serve as a platform that aims to inform, inspire and evolve beyond the Thomasian Scholars’ sphere.</p>
                    </div>
                    <div className="col-sm">
                        <h4 className="content-mission">MISSION</h4>
                        <p className="text-mission">Escolario aspires to thrive in relaying credible and sensible stories that uphold the standards of responsible journalism. This publication aims to produce and encourage students to be critical, creative and socially-aware for the service of God and of the people.</p>
                    </div>
                    <div className="col-sm">

                        <h4 className="content-mission">VISION</h4>
                        <p className="text-mission">Escolario is committed to serve as an avenue for news and stories revolving within and beyond the scholars’ sphere. By reviving the publication and recognizing the abilities of diverse and passionate writers, the publication aims to build a stronger foundation for responsible journalism.</p>
                    </div>
                </div>
                <div className="col-sm-7">
                    <EditorialBoardList />
                </div>
            </div>
            <div className="my-4">
                <h3 className="board-header text-center ntxt">SECTION WRITERS</h3>
            </div>
            <div className="row mx-auto">
                {
                    sectionWriters.map((officer, index) => (
                        <EditorialBoard officer={officer} key={index} />
                    ))
                }
            </div>
        </Container>
    )
}
export default Escolario
