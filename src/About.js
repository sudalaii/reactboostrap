import Card from 'react-bootstrap/Card';
function About() {
    return (
        <>
            <Card className="bg-dark text-white">
                <Card.Img src="/images/logo3.webp" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
        </>
    )
}
export default About