import React, {Component} from 'react'
import {ListGroup, Card,CardGroup,Row,Col, Button, Container} from 'react-bootstrap'
import './AssetList.css'

var items = [
    {
        name: "machine-001",
        status: "running",
        start: "2021-10-08 8:00",
        duration: "24hr 14mins",
        end: "",
        image: "src/resource/image/machine_001.png",
        detail: "ajshdkljahsdkljahsdkl",
        display: true
    },
    {
        name: "machine-002",
        status: "running",
        start: "2021-10-08 8:00",
        duration: "24hr 14mins",
        end: "",
        image: "src/resource/image/machine_002.jpg",
        detail: "ajshdkljahsdkljahsdkl",
        display: true
    },
    {
        name: "machine-003",
        status: "running",
        start: "2021-10-08 8:00",
        duration: "24hr 14mins",
        end: "",
        image: "src/resource/image/machine_003.jpg",
        detail: "ajshdkljahsdkljahsdkl",
        display: true
    },
    {
        name: "machine-004",
        status: "running",
        start: "2021-10-08 8:00",
        duration: "24hr 14mins",
        end: "",
        image: "src/resource/image/machine_004.jpg",
        detail: "ajshdkljahsdkljahsdkl",
        display: true
    },
    {
        name: "machine-005",
        status: "running",
        start: "2021-10-08 8:00",
        duration: "24hr 14mins",
        end: "",
        image: "src/resource/image/machine_005.jpg",
        detail: "ajshdkljahsdkljahsdkl",
        display: true
    },
]

class AssetList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false
        };
    }

    searchAsset(filter){
        console.log(filter)
        var items = this.state.items;
        for (var i = 0; i < this.state.items.length; i++) {
            var itemNow = items[i];
            var txtValue = itemNow.name+itemNow.status+itemNow.start+itemNow.duration
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                items[i].display = true;
            } else {
                items[i].display = false;
            }
        }
        this.setState({
            isLoaded: true,
            items: items
        });
    }

    componentDidMount(){
        this.setState({
            isLoaded: true,
            items: items
        });
        // fetch("http://localhost:3001/read")
        // .then(res => res.json())
        // .then(
        //     (result) => {
        //         console.log(result.rows);
        //     this.setState({
        //       isLoaded: true,
        //       items: result.rows
        //     });

            
        //   },
        //   // Note: it's important to handle errors here
        //   // instead of a catch() block so that we don't swallow
        //   // exceptions from actual bugs in components.
        //   (error) => {
        //     this.setState({
        //       isLoaded: true,
        //       error
        //     });
        //   })
    }
    render() {
        if (this.state.isLoaded){
            var myItems = [];
            for (var i = 0; i < this.state.items.length; i++){
                if (this.state.items[i].display){
                    myItems.push(
                        <Col>
                            <Card style={{ width: '200px' , height: '400px'}}>
                                <Container className='flexBox'>
                                    <Card.Img variant="top" src={this.state.items[i].image} style={{ maxWidth: '100%', maxHeight: '100%', display: 'block', marginLeft: 'auto',marginRight: 'auto',marginTop: 'auto',marginBottom: 'auto'}}/>
                                </Container>
                                <Card.Body>
                                <Card.Title>{this.state.items[i].name}</Card.Title>
                                <Card.Text>
                                    Status: {this.state.items[i].status}
                                </Card.Text>
                                <Card.Text>
                                    Start: {this.state.items[i].start}
                                </Card.Text>
                                <Card.Text>
                                    Duration: {this.state.items[i].duration}
                                </Card.Text>
                                <Button variant="primary">Go to machine</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ) 
                }
            }

            return (
                <Container>
                    <Container style={{margin: '3%'}}>
                        <label for="asset-search">Search asset:&nbsp;</label>
                        <input type="search" id="asset-search" name="q" aria-label="Search through site content" onChange={event => this.searchAsset(event.target.value)}/>
                    </Container>
                    <Row xs="auto" style={{margin: '3%'}}>
                        {myItems}
                    </Row>
                </Container>
            )
        }else{
            return <p>loading . . .</p>
        }
        
    }
}

export default AssetList;