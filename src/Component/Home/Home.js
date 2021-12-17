import Card from "../Card/Card"
import "./Home.css"
function Home() {

    return (
        <>
            <div className="main" >
                <button className="btn" >Create Security Group</button>
                <div className="card-div" >
                    <Card name="Admin Group" ></Card>
                    <Card name="Managers" ></Card>
                    <Card name="Sales Team" ></Card>
                    <Card name="Hr Team" ></Card>
                    <Card name="IT Team" ></Card>
                    <Card name="Production Team" ></Card>
                </div>
            </div>
        </>
    );

}
export default Home;