import Link from "next/link";
import data from "../data.json";
// import StaticContent from "./StaticContent";

const ServicesSection = () => {
    return (
        // <StaticContent>
        <section id='services' className='services section-bg'>
            <div className='container' data-aos='fade-up'>
                <div className='section-header'>
                    <h2>Services</h2>
                    <p>
                        Voluptatem quibusdam ut ullam perferendis repellat non
                        ut consequuntur est eveniet deleniti fignissimos eos
                        quam
                    </p>
                </div>

                <div className='row gy-4'>
                    {data.services.map(service => (
                        <div
                            className='col-lg-4 col-md-6'
                            data-aos='fade-up'
                            data-aos-delay='100'>
                            <div className='service-item  position-relative'>
                                <div className='icon'>
                                    <i className='fa-solid fa-mountain-city'></i>
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                {/* <Link href='/services/0'>
                                    <a className='readmore stretched-link'>
                                        Learn more{" "}
                                        <i className='bi bi-arrow-right'></i>
                                    </a>
                                </Link> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        // </StaticContent>
    );
};

export default ServicesSection;
