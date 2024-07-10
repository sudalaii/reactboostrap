import Card from 'react-bootstrap/Card';
import './myStyle.css';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import { FiArrowRightCircle } from "react-icons/fi";
import { LuIndianRupee } from "react-icons/lu";

function Home() {
    return (
        <>
            <div>
                <Carousel >
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/images/carosel2.webp" 

                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/images/carosel5.webp" 

                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/images/caroselnew2.webp"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/images/carosel4.webp"

                        />

                    </Carousel.Item>
                </Carousel>
            </div>
            {/* wireless headset in tws */}
            <div className='tws'>
                <div class="container tws">
                    <div class="row ">
                        <div className="col-sm-12 col-md-6 twsleft  d-flex align-items-center justify-content-center ">
                            <div className='twsbox m-3'>
                                <div>
                                    <strong><h1>true wireless earbuds</h1></strong>
                                    <h3 className=' price d-flex align-items-center justify-content-center'>starting from<LuIndianRupee />999*</h3>
                                    <div className='shopproducts d-flex align-items-center justify-content-center'><button>shop products <FiArrowRightCircle /></button></div>
                                </div>`
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6">
                            <Image src="/images/tws.webp" fluid />
                        </div>
                    </div>
                </div>
                {/* tws box */}
                <div className='container-fluid'>
                    <div className='row p-3'>
                        <div className='col-lg-3 col-md-6 col-sm-12 mb-3 hellos'>
                            <Card style={{ borderRadius: '15px' }} >
                                <Card.Img variant="top" src="/images/tws1.webp" className="custom-card-img-top" />
                                <Card.Body>
                                    <Card.Title>

                                        <h5>
                                            <div className='d-flex justify-content-between' >immortal 131
                                                <div> <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#153145" }}></button>
                                                    <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#191126" }}></button></div>
                                            </div>
                                        </h5>
                                        <div className='d-flex'> <p><LuIndianRupee />1,199</p>
                                            <p className="p-1" style={{ textDecoration: 'line-through', fontWeight: "400", fontSize: "15px" }}> <LuIndianRupee />3,490</p>
                                            <p className="p-1" style={{ color: "green", fontSize: "15px" }}>66% off</p>
                                        </div>
                                        <div className='d-flex justify-content-center '>
                                            <button className="p-1" style={{ width: "320px", borderRadius: "10px", color: "white", backgroundColor: "#1A2024", textTransform: "capitalize" }}>add to cart</button>
                                        </div>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 mb-3'>
                            <Card style={{ borderRadius: '15px' }}>
                                <Card.Img variant="top" src="/images/tws3.webp" className="custom-card-img-top" />
                                <Card.Body>
                                    <Card.Title> <h5>
                                        <div className='d-flex justify-content-between' >nirvana ion
                                            <div> <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#153145" }}></button>
                                                <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#191126" }}></button></div>
                                        </div>
                                    </h5>
                                        <div className='d-flex'> <p><LuIndianRupee />3,499</p>
                                            <p className="p-1"style={{ textDecoration: 'line-through', fontWeight: "400", fontSize: "15px" }}><LuIndianRupee />11,999</p>
                                            <p className="p-1" style={{ color: "green", fontSize: "15px" }}>71% off</p>
                                        </div>
                                        <div className='d-flex justify-content-center '>
                                            <button className="p-1" style={{ width: "320px", borderRadius: "10px", color: "white", backgroundColor: "#1A2024", textTransform: "capitalize" }}>add to cart</button>
                                        </div></Card.Title>

                                </Card.Body>

                            </Card>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 mb-3'>
                            <Card style={{ borderRadius: '15px' }}>
                                <Card.Img variant="top" src="/images/tws10.gif" className="custom-card-img-top" />
                                <Card.Body>
                                    <Card.Title>
                                        <h5>
                                            <div className='d-flex justify-content-between' >immortal 170
                                                <div> <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#153145" }}></button>
                                                    <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#191126" }}></button></div>
                                            </div>
                                        </h5>
                                        <div className='d-flex'> <p><LuIndianRupee />1,899</p>
                                            <p className="p-1" style={{ textDecoration: 'line-through', fontWeight: "400", fontSize: "15px" }}> <LuIndianRupee />3,499</p>
                                            <p className="p-1" style={{ color: "green", fontSize: "15px" }}>46% off</p>
                                        </div>
                                        <div className='d-flex justify-content-center '>
                                            <button className="p-1" style={{ width: "320px", borderRadius: "10px", color: "white", backgroundColor: "#1A2024", textTransform: "capitalize" }}>add to cart</button>
                                        </div>
                                    </Card.Title>

                                </Card.Body>

                            </Card>
                        </div>
                        <div className='col-lg-3 col-sm-12 col-md-6 mb-3'>
                            <Card style={{ borderRadius: '15px' }}>
                                <Card.Img variant="top" src="/images/tws6.webp" className="custom-card-img-top" />
                                <Card.Body>
                                    <Card.Title>
                                        <h5>
                                            <div className='d-flex justify-content-between' >airdopes 131
                                                <div> <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#153145" }}></button>
                                                    <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#191126" }}></button></div>
                                            </div>
                                        </h5>
                                        <div className='d-flex'> <p><LuIndianRupee />899</p>
                                            <p className="p-1" style={{ textDecoration: 'line-through', fontWeight: "400", fontSize: "15px" }}> <LuIndianRupee />2,990</p>
                                            <p className="p-1" style={{ color: "green", fontSize: "15px" }}>70% off</p>
                                        </div>
                                        <div className='d-flex justify-content-center '>
                                            <button className="p-1" style={{ width: "320px", borderRadius: "10px", color: "white", backgroundColor: "#1A2024", textTransform: "capitalize" }}>add to cart</button>
                                        </div>
                                    </Card.Title>
                                </Card.Body>

                            </Card>
                        </div>
                    </div>
                </div>
            </div>




            {/* watch topic */}

            <div className='watch'>

                {/* watch image */}

                <div class="container watch">
                    <div class="row ">
                        <div class="col-sm-12 col-md-6 watchleft">
                            <Image src="/images/logo15.webp" fluid />
                        </div>
                        <div className="col-sm-12 col-md-6 watchright  d-flex align-items-center justify-content-center ">
                            <div className='watchrightbox '>
                                <div>
                                    <strong><h1>smart watch</h1></strong>
                                    <h3 className=' price d-flex align-items-center justify-content-center'>starting from<LuIndianRupee />1699*</h3>
                                    <div className='shopproducts d-flex align-items-center justify-content-center'><button>shop products <FiArrowRightCircle /></button></div>
                                </div><br></br>
                            </div>
                        </div>

                    </div>
                </div>
                {/* watch box */}
                <div className='container-fluid'>
                    <div className='row p-3'>
                        <div className='col-lg-3 col-md-6 col-sm-12 mb-3 hellos'>
                            <Card style={{ borderRadius: '15px' }} >
                                <Card.Img variant="top" src="/images/logo5.webp" className="custom-card-img-top" />
                                <Card.Body>
                                    <Card.Title>
                                        <h5>
                                            <div className='d-flex justify-content-between' >ultima chorons
                                                <div> <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#153145" }}></button>
                                                    <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#191126" }}></button></div>
                                            </div>
                                        </h5>
                                        <div className='d-flex'> <p><LuIndianRupee />2,599</p>
                                            <p className="p-1" style={{ textDecoration: 'line-through', fontWeight: "400", fontSize: "15px" }}> <LuIndianRupee />8,999</p>
                                            <p className="p-1" style={{ color: "green", fontSize: "15px" }}>71% off</p>
                                        </div>
                                        <div className='d-flex justify-content-center '>
                                            <button className="p-1" style={{ width: "320px", borderRadius: "10px", color: "white", backgroundColor: "#1A2024", textTransform: "capitalize" }}>add to cart</button>
                                        </div>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 mb-3'>
                            <Card style={{ borderRadius: '15px' }}>
                                <Card.Img variant="top" src="/images/logo8.webp" className="custom-card-img-top" />
                                <Card.Body>
                                    <Card.Title> <h5>
                                        <div className='d-flex justify-content-between' >strom call 2
                                            <div> <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#153145" }}></button>
                                                <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#191126" }}></button></div>
                                        </div>
                                    </h5>
                                        <div className='d-flex'> <p><LuIndianRupee />1,799</p>
                                            <p className="p-1" style={{ textDecoration: 'line-through', fontWeight: "400", fontSize: "15px" }}> <LuIndianRupee />6,999</p>
                                            <p className="p-1" style={{ color: "green", fontSize: "15px" }}>74% off</p>
                                        </div>
                                        <div className='d-flex justify-content-center '>
                                            <button className="p-1" style={{ width: "320px", borderRadius: "10px", color: "white", backgroundColor: "#1A2024", textTransform: "capitalize" }}>add to cart</button>
                                        </div></Card.Title>

                                </Card.Body>

                            </Card>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 mb-3'>
                            <Card style={{ borderRadius: '15px' }}>
                                <Card.Img variant="top" src="/images/logo6.webp" className="custom-card-img-top" />
                                <Card.Body>
                                    <Card.Title>
                                        <h5>
                                            <div className='d-flex justify-content-between' >wave flex
                                                <div> <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#153145" }}></button>
                                                    <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#191126" }}></button></div>
                                            </div>
                                        </h5>
                                        <div className='d-flex'> <p><LuIndianRupee />1,599</p>
                                            <p className="p-1" style={{ textDecoration: 'line-through', fontWeight: "400", fontSize: "15px" }}> <LuIndianRupee />7,990</p>
                                            <p className="p-1" style={{ color: "green", fontSize: "15px" }}>80% off</p>
                                        </div>
                                        <div className='d-flex justify-content-center '>
                                            <button className="p-1" style={{ width: "320px", borderRadius: "10px", color: "white", backgroundColor: "#1A2024", textTransform: "capitalize" }}>add to cart</button>
                                        </div>
                                    </Card.Title>

                                </Card.Body>

                            </Card>
                        </div>
                        <div className='col-lg-3 col-sm-12 col-md-6 mb-3'>
                            <Card style={{ borderRadius: '15px' }}>
                                <Card.Img variant="top" src="/images/logo7.webp" className="custom-card-img-top" />
                                <Card.Body>
                                    <Card.Title>
                                        <h5>
                                            <div className='d-flex justify-content-between' >luner contect
                                                <div> <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#153145" }}></button>
                                                    <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#191126" }}></button></div>
                                            </div>
                                        </h5>
                                        <div className='d-flex'> <p><LuIndianRupee />1,799</p>
                                            <p className="p-1" style={{ textDecoration: 'line-through', fontWeight: "400", fontSize: "15px" }}> <LuIndianRupee />9,499</p>
                                            <p className="p-1" style={{ color: "green", fontSize: "15px" }}>81% off</p>
                                        </div>
                                        <div className='d-flex justify-content-center '>
                                            <button className="p-1" style={{ width: "320px", borderRadius: "10px", color: "white", backgroundColor: "#1A2024", textTransform: "capitalize" }}>add to cart</button>
                                        </div>
                                    </Card.Title>
                                </Card.Body>

                            </Card>
                        </div>
                    </div>
                </div>

            </div>



            {/* neckband */}
            <div className='neckband'>
                {/* neckband image */}

                <div class="container">
                    <div class="row ">
                        <div class="col-sm-12 col-md-6 neckleft  d-flex align-items-center justify-content-center mb-1">
                            <div >
                                <strong><h1>neckband</h1></strong>
                                <h3 className=' price d-flex align-items-center justify-content-center'>starting from<LuIndianRupee />999*</h3>
                                <div className='shopproducts d-flex align-items-center justify-content-center'> <button>shop products <FiArrowRightCircle /></button></div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6">
                            <Image src="/images/logo10.webp" fluid style={{ width: "550px" }} />
                        </div>
                    </div>
                </div>

                {/* neckband cards */}

                <div className='container-fluid'>
                    <div className='row p-3'>
                        <div className='col-lg-3 col-md-6 col-sm-12 mb-3 hellos'>
                            <Card style={{ borderRadius: '15px' }} >
                                <Card.Img variant="top" src="/images/logo16.webp" className="custom-card-img-top" />
                                <Card.Body>
                                    <Card.Title>
                                        <h5>
                                            <div className='d-flex justify-content-between' >rockers 255pro+
                                                <div> <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#153145" }}></button>
                                                    <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#191126" }}></button></div>
                                            </div>
                                        </h5>
                                        <div className='d-flex'> <p><LuIndianRupee />1,599</p>
                                            <p className="p-1" style={{ textDecoration: 'line-through', fontWeight: "400", fontSize: "15px" }}> <LuIndianRupee />3,990</p>
                                            <p className="p-1" style={{ color: "green", fontSize: "15px" }}>60% off</p>
                                        </div>
                                        <div className='d-flex justify-content-center '>
                                            <button className="p-1" style={{ width: "320px", borderRadius: "10px", color: "white", backgroundColor: "#1A2024", textTransform: "capitalize" }}>add to cart</button>
                                        </div>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 mb-3'>
                            <Card style={{ borderRadius: '15px' }}>
                                <Card.Img variant="top" src="/images/logo17.webp" className="custom-card-img-top" />
                                <Card.Body>
                                    <Card.Title> <h5>
                                        <div className='d-flex justify-content-between' >rockers trinity
                                            <div> <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#153145" }}></button>
                                                <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#191126" }}></button></div>
                                        </div>
                                    </h5>
                                        <div className='d-flex'> <p><LuIndianRupee />1,499</p>
                                            <p className="p-1" style={{ textDecoration: 'line-through', fontWeight: "400", fontSize: "15px" }}> <LuIndianRupee />2,499</p>
                                            <p className="p-1" style={{ color: "green", fontSize: "15px" }}>40% off</p>
                                        </div>
                                        <div className='d-flex justify-content-center '>
                                            <button className="p-1" style={{ width: "320px", borderRadius: "10px", color: "white", backgroundColor: "#1A2024", textTransform: "capitalize" }}>add to cart</button>
                                        </div></Card.Title>

                                </Card.Body>

                            </Card>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 mb-3'>
                            <Card style={{ borderRadius: '15px' }}>
                                <Card.Img variant="top" src="/images/logo18.webp" className="custom-card-img-top" />
                                <Card.Body>
                                    <Card.Title>
                                        <h5>
                                            <div className='d-flex justify-content-between' >rockers 255 arc
                                                <div> <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#153145" }}></button>
                                                    <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#191126" }}></button></div>
                                            </div>
                                        </h5>
                                        <div className='d-flex'> <p><LuIndianRupee />1,099</p>
                                            <p className="p-1" style={{ textDecoration: 'line-through', fontWeight: "400", fontSize: "15px" }}> <LuIndianRupee />2,499</p>
                                            <p className="p-1" style={{ color: "green", fontSize: "15px" }}>56% off</p>
                                        </div>
                                        <div className='d-flex justify-content-center '>
                                            <button className="p-1" style={{ width: "320px", borderRadius: "10px", color: "white", backgroundColor: "#1A2024", textTransform: "capitalize" }}>add to cart</button>
                                        </div>
                                    </Card.Title>

                                </Card.Body>

                            </Card>
                        </div>
                        <div className='col-lg-3 col-sm-12 col-md-6 mb-3'>
                            <Card style={{ borderRadius: '15px' }}>
                                <Card.Img variant="top" src="/images/logo19.webp" className="custom-card-img-top" />
                                <Card.Body>
                                    <Card.Title>
                                        <h5>
                                            <div className='d-flex justify-content-between' >rockers 375
                                                <div> <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#153145" }}></button>
                                                    <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#191126" }}></button></div>
                                            </div>
                                        </h5>
                                        <div className='d-flex'> <p><LuIndianRupee />1,499</p>
                                            <p className="p-1" style={{ textDecoration: 'line-through', fontWeight: "400", fontSize: "15px" }}> <LuIndianRupee />3,990</p>
                                            <p className="p-1" style={{ color: "green", fontSize: "15px" }}>62% off</p>
                                        </div>
                                        <div className='d-flex justify-content-center '>
                                            <button className="p-1" style={{ width: "320px", borderRadius: "10px", color: "white", backgroundColor: "#1A2024", textTransform: "capitalize" }}>add to cart</button>
                                        </div>
                                    </Card.Title>
                                </Card.Body>

                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <Image src="/images/brand.webp" fluid />
            </div>

            {/* boom hedset */}

            <div className='boomheadset'>
                <div className="container boomheadset">
                    <div class="row ">
                        <div class="col-sm-12 col-md-6 boomheadsetleft ">
                            <Image src="/images/headphonelogo1.webp" fluid />
                        </div>
                        <div className="col-sm-12 col-md-6 boomheadsetright  d-flex align-items-center justify-content-center ">
                            <div className='watchrightbox '>
                                <div>
                                    <strong><h1 style={{ fontSize: "65px" }}>headphones</h1></strong>
                                    <h3 className=' price d-flex align-items-center justify-content-center'>starting from<LuIndianRupee />1199*</h3>
                                    <div className='shopproducts d-flex align-items-center justify-content-center'><button>shop products <FiArrowRightCircle /></button></div>
                                </div><br></br>
                            </div>
                        </div>

                    </div>
                </div>
                {/* boomheadset box */}
                <div className='container-fluid'>
                    <div className='row p-3'>
                        <div className='col-lg-3 col-md-6 col-sm-12 mb-3 hellos'>
                            <Card style={{ borderRadius: '15px' }} >
                                <Card.Img variant="top" src="/images/logo12.webp" className="custom-card-img-top" />
                                <Card.Body>
                                    <Card.Title>
                                        <h5>
                                            <div className='d-flex justify-content-between' >rockers 518
                                                <div> <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#153145" }}></button>
                                                    <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#191126" }}></button></div>
                                            </div>
                                        </h5>
                                        <div className='d-flex'> <p><LuIndianRupee />1,599</p>
                                            <p className="p-1" style={{ textDecoration: 'line-through', fontWeight: "400", fontSize: "15px" }}> <LuIndianRupee />3,990</p>
                                            <p className="p-1" style={{ color: "green", fontSize: "15px" }}>60% off</p>
                                        </div>
                                        <div className='d-flex justify-content-center '>
                                            <button className="p-1" style={{ width: "320px", borderRadius: "10px", color: "white", backgroundColor: "#1A2024", textTransform: "capitalize" }}>add to cart</button>
                                        </div>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 mb-3'>
                            <Card style={{ borderRadius: '15px' }}>
                                <Card.Img variant="top" src="/images/logo14.webp" className="custom-card-img-top" />
                                <Card.Body>
                                    <Card.Title> <h5>
                                        <div className='d-flex justify-content-between' >rockid rush
                                            <div> <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#153145" }}></button>
                                                <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#191126" }}></button></div>
                                        </div>
                                    </h5>
                                        <div className='d-flex'> <p><LuIndianRupee />1,499</p>
                                            <p className="p-1" style={{ textDecoration: 'line-through', fontWeight: "400", fontSize: "15px" }}> <LuIndianRupee />2,499</p>
                                            <p className="p-1" style={{ color: "green", fontSize: "15px" }}>40% off</p>
                                        </div>
                                        <div className='d-flex justify-content-center '>
                                            <button className="p-1" style={{ width: "320px", borderRadius: "10px", color: "white", backgroundColor: "#1A2024", textTransform: "capitalize" }}>add to cart</button>
                                        </div></Card.Title>

                                </Card.Body>

                            </Card>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 mb-3'>
                            <Card style={{ borderRadius: '15px' }}>
                                <Card.Img variant="top" src="/images/logo13.webp" className="custom-card-img-top" />
                                <Card.Body>
                                    <Card.Title>
                                        <h5>
                                            <div className='d-flex justify-content-between' >rockers 551ANC
                                                <div> <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#153145" }}></button>
                                                    <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#191126" }}></button></div>
                                            </div>
                                        </h5>
                                        <div className='d-flex'> <p><LuIndianRupee />3,299</p>
                                            <p className="p-1" style={{ textDecoration: 'line-through', fontWeight: "400", fontSize: "15px" }}> <LuIndianRupee />7,990</p>
                                            <p className="p-1" style={{ color: "green", fontSize: "15px" }}>59% off</p>
                                        </div>
                                        <div className='d-flex justify-content-center '>
                                            <button className="p-1" style={{ width: "320px", borderRadius: "10px", color: "white", backgroundColor: "#1A2024", textTransform: "capitalize" }}>add to cart</button>
                                        </div>
                                    </Card.Title>

                                </Card.Body>

                            </Card>
                        </div>
                        <div className='col-lg-3 col-sm-12 col-md-6 mb-3'>
                            <Card style={{ borderRadius: '15px' }}>
                                <Card.Img variant="top" src="/images/logo11.webp" className="custom-card-img-top" />
                                <Card.Body>
                                    <Card.Title>
                                        <h5>
                                            <div className='d-flex justify-content-between' >batman dc edition
                                                <div> <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#153145" }}></button>
                                                    <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#191126" }}></button></div>
                                            </div>
                                        </h5>
                                        <div className='d-flex'> <p><LuIndianRupee />1,799</p>
                                            <p className="p-1" style={{ textDecoration: 'line-through', fontWeight: "400", fontSize: "15px" }}> <LuIndianRupee />3,990</p>
                                            <p className="p-1" style={{ color: "green", fontSize: "15px" }}>81% off</p>
                                        </div>
                                        <div className='d-flex justify-content-center '>
                                            <button className="p-1" style={{ width: "320px", borderRadius: "10px", color: "white", backgroundColor: "#1A2024", textTransform: "capitalize" }}>add to cart</button>
                                        </div>
                                    </Card.Title>
                                </Card.Body>

                            </Card>
                        </div>
                    </div>
                </div>

            </div>



            {/* bluetoothspeaker */}
            <div className='bluetooth'>
                {/* speaker image */}

                <div class="container">
                    <div class="row ">
                        <div class="col-sm-12 col-md-6 blueleft  d-flex align-items-center justify-content-center mb-1">
                            <div >
                                <strong><h1 className="d-flex justify-content-center text-center m-2" style={{ fontSize: "56px " }}>wireless speakers</h1></strong>
                                <h3 className=' price d-flex align-items-center justify-content-center'>starting from<LuIndianRupee />749*</h3>
                                <div className='shopproducts d-flex align-items-center justify-content-center'><button>shop products <FiArrowRightCircle /></button></div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6">
                            <Image src="/images/speakerlogo.webp" fluid />
                        </div>
                    </div>
                </div>

                {/* bluetoothspeaker cards */}

                <div className='container-fluid'>
                    <div className='row p-3'>
                        <div className='col-lg-3 col-md-6 col-sm-12 mb-3 hellos'>
                            <Card style={{ borderRadius: '15px' }} >
                                <Card.Img variant="top" src="/images/w2.webp" className="custom-card-img-top" />
                                <Card.Body>
                                    <Card.Title>
                                        <h5>
                                            <div className='d-flex justify-content-between' >stone 350
                                                <div> <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#153145" }}></button>
                                                    <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#191126" }}></button></div>
                                            </div>
                                        </h5>
                                        <div className='d-flex'> <p><LuIndianRupee />1,599</p>
                                            <p className="p-1" style={{ textDecoration: 'line-through', fontWeight: "400", fontSize: "15px" }}> <LuIndianRupee />3,490</p>
                                            <p className="p-1" style={{ color: "green", fontSize: "15px" }}>54% off</p>
                                        </div>
                                        <div className='d-flex justify-content-center '>
                                            <button className="p-1" style={{ width: "320px", borderRadius: "10px", color: "white", backgroundColor: "#1A2024", textTransform: "capitalize" }}>add to cart</button>
                                        </div>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 mb-3'>
                            <Card style={{ borderRadius: '15px' }}>
                                <Card.Img variant="top" src="/images/w3.webp" className="custom-card-img-top" />
                                <Card.Body>
                                    <Card.Title> <h5>
                                        <div className='d-flex justify-content-between' >stone 180
                                            <div> <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#153145" }}></button>
                                                <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#191126" }}></button></div>
                                        </div>
                                    </h5>
                                        <div className='d-flex'> <p><LuIndianRupee />1,499</p>
                                            <p className="p-1" style={{ textDecoration: 'line-through', fontWeight: "400", fontSize: "15px" }}> <LuIndianRupee />2,490</p>
                                            <p className="p-1" style={{ color: "green", fontSize: "15px" }}>40% off</p>
                                        </div>
                                        <div className='d-flex justify-content-center '>
                                            <button className="p-1" style={{ width: "320px", borderRadius: "10px", color: "white", backgroundColor: "#1A2024", textTransform: "capitalize" }}>add to cart</button>
                                        </div></Card.Title>

                                </Card.Body>

                            </Card>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 mb-3'>
                            <Card style={{ borderRadius: '15px' }}>
                                <Card.Img variant="top" src="/images/w1.jpg" className="custom-card-img-top" />
                                <Card.Body>
                                    <Card.Title>
                                        <h5>
                                            <div className='d-flex justify-content-between' >stone 190
                                                <div> <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#153145" }}></button>
                                                    <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#191126" }}></button></div>
                                            </div>
                                        </h5>
                                        <div className='d-flex'> <p><LuIndianRupee />999</p>
                                            <p className="p-1" style={{ textDecoration: 'line-through', fontWeight: "400", fontSize: "15px" }}> <LuIndianRupee />2,999</p>
                                            <p className="p-1" style={{ color: "green", fontSize: "15px" }}>67% off</p>
                                        </div>
                                        <div className='d-flex justify-content-center '>
                                            <button className="p-1" style={{ width: "320px", borderRadius: "10px", color: "white", backgroundColor: "#1A2024", textTransform: "capitalize" }}>add to cart</button>
                                        </div>
                                    </Card.Title>

                                </Card.Body>

                            </Card>
                        </div>
                        <div className='col-lg-3 col-sm-12 col-md-6 mb-3'>
                            <Card style={{ borderRadius: '15px' }}>
                                <Card.Img variant="top" src="/images/w4.webp" className="custom-card-img-top" />
                                <Card.Body>
                                    <Card.Title>
                                        <h5>
                                            <div className='d-flex justify-content-between' >stone 135
                                                <div> <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#153145" }}></button>
                                                    <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#191126" }}></button></div>
                                            </div>
                                        </h5>
                                        <div className='d-flex'> <p><LuIndianRupee />1,199</p>
                                            <p className="p-1" style={{ textDecoration: 'line-through', fontWeight: "400", fontSize: "15px" }}> <LuIndianRupee />1,990</p>
                                            <p className="p-1" style={{ color: "green", fontSize: "15px" }}>40% off</p>
                                        </div>
                                        <div className='d-flex justify-content-center '>
                                            <button className="p-1" style={{ width: "320px", borderRadius: "10px", color: "white", backgroundColor: "#1A2024", textTransform: "capitalize" }}>add to cart</button>
                                        </div>
                                    </Card.Title>
                                </Card.Body>

                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            {/* actor */}
            <div className='container-fluid'>
                <h1 className='container-fluid'>shop by lifestyle</h1>
                <div className='container-fluid '>
                    <div className='row '>
                        <div className='col'>
                            <Card style={{ border: "none" }}>
                                <Card.Img variant="top" src="/images/a1.webp" className="custom-card-img-top" />
                                <Card.Body style={{ backgroundColor: "#EFF4F7" }}>
                                    <Card.Title>
                                        <div className='d-flex justify-content-center text-cener' >
                                            <div>
                                                <h2>for fitness</h2>
                                                <div className="d-flex justify-content-center " style={{ fontSize: "15px", color: "#2F5B96", gap: "10px" }}>
                                                    <div> view all  </div> <span ><FiArrowRightCircle /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Title>
                                </Card.Body>

                            </Card>

                        </div>
                        <div className='col'>
                            <Card style={{ border: "none" }}>
                                <Card.Img variant="top" src="/images/a2.webp" className="custom-card-img-top" />
                                <Card.Body style={{ backgroundColor: "#EFF4F7" }}>
                                    <Card.Title>
                                        <div className='d-flex justify-content-center text-cener' >
                                            <div>
                                                <h2>for parties</h2>
                                                <div className="d-flex justify-content-center " style={{ fontSize: "15px", color: "#2F5B96", gap: "10px" }}>
                                                    <div> view all  </div> <span ><FiArrowRightCircle /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Title>
                                </Card.Body>

                            </Card>
                        </div>
                        <div className='col'>
                            <Card style={{ borderRadius: '15px', border: "none" }}>
                                <Card.Img variant="top" src="/images/a3.webp" className="custom-card-img-top" />
                                <Card.Body style={{ backgroundColor: "#EFF4F7" }}>
                                    <Card.Title>
                                        <div className='d-flex justify-content-center text-cener' >
                                            <div>
                                                <h2>for work</h2>
                                                <div className="d-flex justify-content-center " style={{ fontSize: "15px", color: "#2F5B96", gap: "10px" }}>
                                                    <div> view all  </div> <span ><FiArrowRightCircle /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Title>
                                </Card.Body>

                            </Card>
                        </div>
                        <div className='col'>
                            <Card style={{ border: "none" }} >
                                <Card.Img variant="top" src="/images/a4.webp" className="custom-card-img-top" />
                                <Card.Body style={{ backgroundColor: "#EFF4F7" }}>
                                    <Card.Title>
                                        <div className='d-flex justify-content-center text-cener' >
                                            <div>
                                                <h2>for audiophiles</h2>
                                                <div className="d-flex justify-content-center " style={{ fontSize: "15px", color: "#2F5B96", gap: "10px" }}>
                                                    <div> view all  </div> <span ><FiArrowRightCircle /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Title>
                                </Card.Body>

                            </Card>
                        </div>
                    </div>
                </div>
            </div><br></br>

            {/* party speaker */}
            <div className='partyspeaker' style={{ backgroundColor: "#EEE0CC" }}>
                <div className="container speaker">
                    <div class="row ">
                        <div class="col-sm-12 col-md-6 partyspeakerleft ">
                            <Image src="/images/speaker2.webp" fluid />
                        </div>
                        <div className="col-sm-12 col-md-6 partyspeakerright  d-flex align-items-center justify-content-center ">
                            <div className='watchrightbox '>
                                <div>
                                    <strong><h1 style={{ fontSize: "56px" }}>party speaker</h1></strong>
                                    <h3 className=' price d-flex align-items-center justify-content-center'>starting from<LuIndianRupee />1199*</h3>
                                    <div className='shopproducts d-flex align-items-center justify-content-center'><button>shop products <FiArrowRightCircle /></button></div>
                                </div><br></br>
                            </div>
                        </div>

                    </div>
                </div>
                {/* party speaker box */}
                <div className='container-fluid'>
                    <div className='row p-3'>
                        <div className='col-lg-3 col-md-6 col-sm-12 mb-3 hellos'>
                            <Card style={{ borderRadius: '15px' }} >
                                <Card.Img variant="top" src="/images/sp1.webp" className="custom-card-img-top" />
                                <Card.Body>
                                    <Card.Title>
                                        <h5>
                                            <div className='d-flex justify-content-between' >party pal 50
                                                <div> <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#153145" }}></button>
                                                    <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#191126" }}></button></div>
                                            </div>
                                        </h5>
                                        <div className='d-flex'> <p><LuIndianRupee />3,999</p>
                                            <p className="p-1" style={{ textDecoration: 'line-through', fontWeight: "400", fontSize: "15px" }}> <LuIndianRupee />7,990</p>
                                            <p className="p-1" style={{ color: "green", fontSize: "15px" }}>50% off</p>
                                        </div>
                                        <div className='d-flex justify-content-center '>
                                            <button className="p-1" style={{ width: "320px", borderRadius: "10px", color: "white", backgroundColor: "#1A2024", textTransform: "capitalize" }}>add to cart</button>
                                        </div>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 mb-3'>
                            <Card style={{ borderRadius: '15px' }}>
                                <Card.Img variant="top" src="/images/sp2.webp" className="custom-card-img-top" />
                                <Card.Body>
                                    <Card.Title> <h5>
                                        <div className='d-flex justify-content-between' >party pal 200
                                            <div> <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#153145" }}></button>
                                                <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#191126" }}></button></div>
                                        </div>
                                    </h5>
                                        <div className='d-flex'> <p><LuIndianRupee />8,999</p>
                                            <p className="p-1" style={{ textDecoration: 'line-through', fontWeight: "400", fontSize: "15px" }}> <LuIndianRupee />9,990</p>
                                            <p className="p-1" style={{ color: "green", fontSize: "15px" }}>10% off</p>
                                        </div>
                                        <div className='d-flex justify-content-center '>
                                            <button className="p-1" style={{ width: "320px", borderRadius: "10px", color: "white", backgroundColor: "#1A2024", textTransform: "capitalize" }}>add to cart</button>
                                        </div></Card.Title>

                                </Card.Body>

                            </Card>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 mb-3'>
                            <Card style={{ borderRadius: '15px' }}>
                                <Card.Img variant="top" src="/images/sp3.webp" className="custom-card-img-top" />
                                <Card.Body>
                                    <Card.Title>
                                        <h5>
                                            <div className='d-flex justify-content-between' >party pal 400
                                                <div> <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#153145" }}></button>
                                                    <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#191126" }}></button></div>
                                            </div>
                                        </h5>
                                        <div className='d-flex'> <p><LuIndianRupee />16,999</p>
                                            <p className="p-1" style={{ textDecoration: 'line-through', fontWeight: "400", fontSize: "15px" }}> <LuIndianRupee />34,990</p>
                                            <p className="p-1" style={{ color: "green", fontSize: "15px" }}>51% off</p>
                                        </div>
                                        <div className='d-flex justify-content-center '>
                                            <button className="p-1" style={{ width: "320px", borderRadius: "10px", color: "white", backgroundColor: "#1A2024", textTransform: "capitalize" }}>add to cart</button>
                                        </div>
                                    </Card.Title>

                                </Card.Body>

                            </Card>
                        </div>
                        <div className='col-lg-3 col-sm-12 col-md-6 mb-3'>
                            <Card style={{ borderRadius: '15px' }}>
                                <Card.Img variant="top" src="/images/sp4.webp" className="custom-card-img-top" />
                                <Card.Body>
                                    <Card.Title>
                                        <h5>
                                            <div className='d-flex justify-content-between' >party pal 320
                                                <div> <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#153145" }}></button>
                                                    <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#191126" }}></button></div>
                                            </div>
                                        </h5>
                                        <div className='d-flex'> <p><LuIndianRupee />12,999</p>
                                            <p className="p-1" style={{ textDecoration: 'line-through', fontWeight: "400", fontSize: "15px" }}> <LuIndianRupee />29,990</p>
                                            <p className="p-1" style={{ color: "green", fontSize: "15px" }}>57% off</p>
                                        </div>
                                        <div className='d-flex justify-content-center '>
                                            <button className="p-1" style={{ width: "320px", borderRadius: "10px", color: "white", backgroundColor: "#1A2024", textTransform: "capitalize" }}>add to cart</button>
                                        </div>
                                    </Card.Title>
                                </Card.Body>

                            </Card>
                        </div>
                    </div>
                </div>

            </div>


            {/* sound bar */}
            <div className='soundbar' style={{ backgroundColor: "#F4E6E6" }}>
                {/* soundbarimage */}

                <div class="container">
                    <div class="row ">
                        <div class="col-sm-12 col-md-6 neckleft  d-flex align-items-center justify-content-center mb-1">
                            <div >
                                <strong><h1 style={{ fontSize: "56px" }}>soundbars</h1></strong>
                                <h3 className=' price d-flex align-items-center justify-content-center'>starting from<LuIndianRupee />1599*</h3>
                                <div className='shopproducts d-flex align-items-center justify-content-center'><button>shop products <FiArrowRightCircle /></button></div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6">
                            <Image src="/images/soundbar.webp" fluid style={{ width: "490px" }} />
                        </div>
                    </div>
                </div>

                {/* soundbar cards */}

                <div className='container-fluid'>
                    <div className='row p-3'>
                        <div className='col-lg-3 col-md-6 col-sm-12 mb-3 hellos'>
                            <Card style={{ borderRadius: '15px' }} >
                                <Card.Img variant="top" src="/images/sb1.webp" className="custom-card-img-top" />
                                <Card.Body>
                                    <Card.Title>
                                        <h5>
                                            <div className='d-flex justify-content-between' >avante bar 480
                                                <div> <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#153145" }}></button>
                                                    <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#191126" }}></button></div>
                                            </div>
                                        </h5>
                                        <div className='d-flex'> <p><LuIndianRupee />1,399</p>
                                            <p className="p-1" style={{ textDecoration: 'line-through', fontWeight: "400", fontSize: "15px" }}> <LuIndianRupee />3,490</p>
                                            <p className="p-1" style={{ color: "green", fontSize: "15px" }}>60% off</p>
                                        </div>
                                        <div className='d-flex justify-content-center '>
                                            <button className="p-1" style={{ width: "320px", borderRadius: "10px", color: "white", backgroundColor: "#1A2024", textTransform: "capitalize" }}>add to cart</button>
                                        </div>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 mb-3'>
                            <Card style={{ borderRadius: '15px' }}>
                                <Card.Img variant="top" src="/images/sb2.webp" className="custom-card-img-top" />
                                <Card.Body>
                                    <Card.Title> <h5>
                                        <div className='d-flex justify-content-between' >avante bar stark
                                            <div> <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#153145" }}></button>
                                                <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#191126" }}></button></div>
                                        </div>
                                    </h5>
                                        <div className='d-flex'> <p><LuIndianRupee />9,499</p>
                                            <p className="p-1" style={{ textDecoration: 'line-through', fontWeight: "400", fontSize: "15px" }}> <LuIndianRupee />21,990</p>
                                            <p className="p-1" style={{ color: "green", fontSize: "15px" }}>57% off</p>
                                        </div>
                                        <div className='d-flex justify-content-center '>
                                            <button className="p-1" style={{ width: "320px", borderRadius: "10px", color: "white", backgroundColor: "#1A2024", textTransform: "capitalize" }}>add to cart</button>
                                        </div></Card.Title>

                                </Card.Body>

                            </Card>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 mb-3'>
                            <Card style={{ borderRadius: '15px' }}>
                                <Card.Img variant="top" src="/images/sb3.webp" className="custom-card-img-top" />
                                <Card.Body>
                                    <Card.Title>
                                        <h5>
                                            <div className='d-flex justify-content-between' >avante bar theme
                                                <div> <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#153145" }}></button>
                                                    <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#191126" }}></button></div>
                                            </div>
                                        </h5>
                                        <div className='d-flex'> <p><LuIndianRupee />9,999</p>
                                            <p className="p-1" style={{ textDecoration: 'line-through', fontWeight: "400", fontSize: "15px" }}> <LuIndianRupee />21,990</p>
                                            <p className="p-1" style={{ color: "green", fontSize: "15px" }}>55% off</p>
                                        </div>
                                        <div className='d-flex justify-content-center '>
                                            <button className="p-1" style={{ width: "320px", borderRadius: "10px", color: "white", backgroundColor: "#1A2024", textTransform: "capitalize" }}>add to cart</button>
                                        </div>
                                    </Card.Title>

                                </Card.Body>

                            </Card>
                        </div>
                        <div className='col-lg-3 col-sm-12 col-md-6 mb-3'>
                            <Card style={{ borderRadius: '15px' }}>
                                <Card.Img variant="top" src="/images/sp5.webp" className="custom-card-img-top" />
                                <Card.Body>
                                    <Card.Title>
                                        <h5>
                                            <div className='d-flex justify-content-between' >avante bar grove
                                                <div> <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#153145" }}></button>
                                                    <button className="p-2" style={{ borderRadius: "100px", height: "20px", backgroundColor: "#191126" }}></button></div>
                                            </div>
                                        </h5>
                                        <div className='d-flex'> <p><LuIndianRupee />1,699</p>
                                            <p className="p-1" style={{ textDecoration: 'line-through', fontWeight: "400", fontSize: "15px" }}> <LuIndianRupee />3,990</p>
                                            <p className="p-1" style={{ color: "green", fontSize: "15px" }}>57% off</p>
                                        </div>
                                        <div className='d-flex justify-content-center '>
                                            <button className="p-1" style={{ width: "320px", borderRadius: "10px", color: "white", backgroundColor: "#1A2024", textTransform: "capitalize" }}>add to cart</button>
                                        </div>
                                    </Card.Title>
                                </Card.Body>

                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home