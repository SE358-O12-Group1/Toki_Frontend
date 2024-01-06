import { Container, Row, Tabs, Tab } from 'react-bootstrap';
import './tabStyle.css';
export default function ManageWindow() {
    return (
        <>
            <Container className='py-4'>
                <Row style={{ justifyContent: 'center' }}>
                    <Tabs
                        variant='pills'
                        defaultActiveKey='Products'
                        className='mb-1 p-0'
                    >
                        <Tab
                            eventKey='Products'
                            title='Products'
                            style={{
                                fontSize: 300,
                                border: 1,
                                color: 'black'
                            }}
                        >
                            WIP
                        </Tab>
                        <Tab
                            eventKey='Orders'
                            title='Orders'
                            style={{ fontSize: 300 }}
                        >
                            WIP
                        </Tab>
                    </Tabs>
                </Row>
            </Container>
        </>
    );
}
