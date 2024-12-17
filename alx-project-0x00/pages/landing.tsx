import Button from "@/components/Button";
import Card from "@/components/Card"

const Landing: React.FC = () => {
    return (
        <div>
            <h1 className="text-xl font-extralight">Landing Page</h1>
            <Card/>
            <Button title="Get started" styles={"text-sm rounded-sm"}/>
            <Button title="Get started" styles={"text-md rounded-md"}/>
            <Button title="Get started" styles={"text-lg rounded-lg"}/>
        </div>
    )
}
export default Landing;