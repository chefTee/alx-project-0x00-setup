import Card from "@/components/Card";
import Button from "@/components/Button";
const Landing: React.FC = () => {
    return(
        <div>
            <h1 className="text-xl font-extralight">Landing Page</h1>
            <Card/>
            <Card/>
            <Card/>
                  {/* Small Buttons */}
            <div className="space-x-3">
                <Button title="Small Rounded-sm" styles="text-sm rounded-sm" />
                <Button title="Small Rounded-md" styles="text-sm rounded-md" />
                <Button title="Small Full" styles="text-sm rounded-full" />
            </div>
                 {/* Medium Buttons */}
            <div className="space-x-3">
                <Button title="Medium Rounded-sm" styles="text-base rounded-sm" />
                <Button title="Medium Rounded-md" styles="text-base rounded-md" />
                <Button title="Medium Full" styles="text-base rounded-full" />
            </div>

                  {/* Large Buttons */}
            <div className="space-x-3">
                <Button title="Large Rounded-sm" styles="text-lg rounded-sm" />
                <Button title="Large Rounded-md" styles="text-lg rounded-md" />
                <Button title="Large Full" styles="text-lg rounded-full" />
            </div>

        </div>

    )
}

export default Landing;