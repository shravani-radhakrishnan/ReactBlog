import Card from 'react-bootstrap/Card';
import Blogs from './BlogData';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';

const BlogsPage = () => {
    return (
        <>
            <Row>
                {Blogs.map((b) => (
                    <Col>
                        <Card style={{ width: '18rem', height: '150px' }}>
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body>
                                <Link key={b.name} to={`/blogs/${b.name}`}>
                                    <Card.Title>{b.name}</Card.Title>
                                    <Card.Text>
                                        {b.title}
                                    </Card.Text>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
}
export default BlogsPage;