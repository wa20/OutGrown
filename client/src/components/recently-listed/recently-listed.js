import React from 'react'
import { Container, Button, Header, Placeholder, Card } from 'semantic-ui-react'

const RecentlyListed = () => (
    <Container text textAlign="center">
        <Header as="h1">Recently Listed</Header>
        <Card.Group itemsPerRow={3}>
            <Card>
                <Card.Content>
                <Placeholder>
                    <Placeholder.Image square />
                </Placeholder>
                <Button primary size="tiny">See More</Button>
                </Card.Content>
            </Card>
            <Card>
                <Card.Content>
                <Placeholder>
                    <Placeholder.Image square />
                </Placeholder>
                <Button primary size="tiny">See More</Button>
                </Card.Content>
            </Card>
            <Card>
                <Card.Content>
                <Placeholder>
                    <Placeholder.Image square />
                </Placeholder>
                <Button primary size="tiny">See More</Button>
                </Card.Content>
            </Card>
        </Card.Group>
    </Container>
)

export default RecentlyListed