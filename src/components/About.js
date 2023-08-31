import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return(
        <div>
            <h1 className="font-bold">About</h1>
            <h2>This is a food delivery app</h2>
            <User name={"Yashika Dangi"}/>
            <UserClass name={"Shubhangi Dourby"} location={"Dehradun"}/>
        </div>
    )
}

export default About;