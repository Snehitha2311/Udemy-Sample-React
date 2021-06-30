import React, { Fragment } from 'react';
import {Carousel} from 'react-bootstrap';

const Carousel1 = () => {
    return (
        <Fragment>
             <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSNXP6BymW1ctKophUn5gEm5WZ6zcz0cNvw&usqp=CAU/800x400?text=Second slide&bg=282c34" width="100" height="300"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            {/* <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTleZNafmyATHL688sfIfkGm-zV_TwhGi2qgQ&usqp=CAU/800x400?text=Second slide&bg=282c34" width="100" height="300"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpgyzmZAtBElGlhIsN0MQRzarYZTQEJe4zpg&usqp=CAU/800x400?text=Third slide&bg=20232a" width="100" height="300"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
        </Fragment>
    )
}
export default Carousel1;