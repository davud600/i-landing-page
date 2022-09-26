import Link from "next/link";
import StaticContent from "./StaticContent";

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
                    <div
                        className='col-lg-4 col-md-6'
                        data-aos='fade-up'
                        data-aos-delay='100'>
                        <div className='service-item  position-relative'>
                            <div className='icon'>
                                <i className='fa-solid fa-mountain-city'></i>
                            </div>
                            <h3>Nesciunt Mete</h3>
                            <p>
                                Provident nihil minus qui consequatur non omnis
                                maiores. Eos accusantium minus dolores iure
                                perferendis tempore et consequatur.
                            </p>
                            <Link href='/services/0'>
                                <a className='readmore stretched-link'>
                                    Learn more{" "}
                                    <i className='bi bi-arrow-right'></i>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div
                        className='col-lg-4 col-md-6'
                        data-aos='fade-up'
                        data-aos-delay='200'>
                        <div className='service-item position-relative'>
                            <div className='icon'>
                                <i className='fa-solid fa-arrow-up-from-ground-water'></i>
                            </div>
                            <h3>Eosle Commodi</h3>
                            <p>
                                Ut autem aut autem non a. Sint sint sit facilis
                                nam iusto sint. Libero corrupti neque eum hic
                                non ut nesciunt dolorem.
                            </p>
                            <Link href='/services/1'>
                                <a className='readmore stretched-link'>
                                    Learn more{" "}
                                    <i className='bi bi-arrow-right'></i>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div
                        className='col-lg-4 col-md-6'
                        data-aos='fade-up'
                        data-aos-delay='300'>
                        <div className='service-item position-relative'>
                            <div className='icon'>
                                <i className='fa-solid fa-compass-drafting'></i>
                            </div>
                            <h3>Ledo Markt</h3>
                            <p>
                                Ut excepturi voluptatem nisi sed. Quidem fuga
                                consequatur. Minus ea aut. Vel qui id voluptas
                                adipisci eos earum corrupti.
                            </p>
                            <Link href='/services/2'>
                                <a className='readmore stretched-link'>
                                    Learn more{" "}
                                    <i className='bi bi-arrow-right'></i>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div
                        className='col-lg-4 col-md-6'
                        data-aos='fade-up'
                        data-aos-delay='400'>
                        <div className='service-item position-relative'>
                            <div className='icon'>
                                <i className='fa-solid fa-trowel-bricks'></i>
                            </div>
                            <h3>Asperiores Commodit</h3>
                            <p>
                                Non et temporibus minus omnis sed dolor esse
                                consequatur. Cupiditate sed error ea fuga sit
                                provident adipisci neque.
                            </p>
                            <Link href='/services/3'>
                                <a className='readmore stretched-link'>
                                    Learn more{" "}
                                    <i className='bi bi-arrow-right'></i>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div
                        className='col-lg-4 col-md-6'
                        data-aos='fade-up'
                        data-aos-delay='500'>
                        <div className='service-item position-relative'>
                            <div className='icon'>
                                <i className='fa-solid fa-helmet-safety'></i>
                            </div>
                            <h3>Velit Doloremque</h3>
                            <p>
                                Cumque et suscipit saepe. Est maiores autem enim
                                facilis ut aut ipsam corporis aut. Sed animi at
                                autem alias eius labore.
                            </p>
                            <Link href='/services/4'>
                                <a className='readmore stretched-link'>
                                    Learn more{" "}
                                    <i className='bi bi-arrow-right'></i>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div
                        className='col-lg-4 col-md-6'
                        data-aos='fade-up'
                        data-aos-delay='600'>
                        <div className='service-item position-relative'>
                            <div className='icon'>
                                <i className='fa-solid fa-arrow-up-from-ground-water'></i>
                            </div>
                            <h3>Dolori Architecto</h3>
                            <p>
                                Hic molestias ea quibusdam eos. Fugiat enim
                                doloremque aut neque non et debitis iure.
                                Corrupti recusandae ducimus enim.
                            </p>
                            <Link href='/services/5'>
                                <a className='readmore stretched-link'>
                                    Learn more{" "}
                                    <i className='bi bi-arrow-right'></i>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        // </StaticContent>
    );
};

export default ServicesSection;
