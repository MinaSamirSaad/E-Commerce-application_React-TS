import {HomeContainer} from "./homepage.styles.js"
import Directory from '../../components/directory/directory.component'
const HomePage = (props) => {
    console.log(props);
    return (
        <HomeContainer>
            <Directory/>
        </HomeContainer>
    )
}
export default HomePage
