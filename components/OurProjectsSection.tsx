import Link from "next/link";
import data from "../data.json";
// import StaticContent from "./StaticContent";

const OurProjectsSection = ({ hasHeader = false }: any) => {
    return (
        // <StaticContent>
        <section id='projects' className='projects'>
            <div className='container' data-aos='fade-up'>
                {hasHeader && (
                    <div className='section-header'>
                        <h2>Our Projects</h2>
                        <p>
                            Consequatur libero assumenda est voluptatem est
                            quidem illum et officia imilique qui vel architecto
                            accusamus fugit aut qui distinctio
                        </p>
                    </div>
                )}

                <div
                    // className='portfolio-isotope'
                    data-portfolio-filter='*'
                    data-portfolio-layout='masonry'
                    data-portfolio-sort='original-order'>
                    {/* <ul
                        className='portfolio-flters'
                        data-aos='fade-up'
                        data-aos-delay='100'>
                        <li data-filter='*' className='filter-active'>
                            All
                        </li>
                        <li data-filter='.filter-remodeling'>Remodeling</li>
                        <li data-filter='.filter-construction'>Construction</li>
                        <li data-filter='.filter-repairs'>Repairs</li>
                        <li data-filter='.filter-design'>Design</li>
                    </ul> */}

                    <div
                        className='row gy-4 portfolio-container'
                        data-aos='fade-up'
                        data-aos-delay='200'>
                        {data.projects.map((project, index) => (
                            <div className='col-lg-4 col-md-6 portfolio-item filter-remodeling'>
                                <div className='portfolio-content h-100'>
                                    <img
                                        src={`/static/img/projects/${project.slug}.jpg`}
                                        className='img-fluid'
                                        alt=''></img>
                                    <div className='portfolio-info'>
                                        <h4>{project.title}</h4>
                                        <p>{project.description}</p>
                                        <a
                                            href={`/static/img/projects/${project.slug}.jpg`}
                                            title={project.title}
                                            // data-gallery='portfolio-gallery-remodeling'
                                            className='glightbox preview-link'>
                                            <i className='bi bi-zoom-in'></i>
                                        </a>
                                        <Link href={`/projects/${index}`}>
                                            <a
                                                title='More Details'
                                                className='details-link'>
                                                <i className='bi bi-link-45deg'></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        // </StaticContent>
    );
};

export default OurProjectsSection;
