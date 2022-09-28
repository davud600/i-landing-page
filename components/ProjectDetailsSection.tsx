// import StaticContent from "./StaticContent";

const ProjectDetailsSection = ({ project }: any) => {
    return (
        // <StaticContent>
        <section id='project-details' className='project-details'>
            <div className='container' data-aos='fade-up' data-aos-delay='100'>
                <div className='position-relative h-100'>
                    <div className='slides-1 portfolio-details-slider swiper'>
                        <div className='swiper-wrapper align-items-center'>
                            <div className='swiper-slide'>
                                <img
                                    src={`/static/img/projects/${project.slug}.jpg`}
                                    alt=''></img>
                            </div>

                            <div className='swiper-slide'>
                                <img
                                    src={`/static/img/projects/${project.slug}1.jpg`}
                                    alt=''></img>
                            </div>

                            <div className='swiper-slide'>
                                <img
                                    src={`/static/img/projects/${project.slug}2.jpg`}
                                    alt=''></img>
                            </div>

                            <div className='swiper-slide'>
                                <img
                                    src={`/static/img/projects/${project.slug}3.jpg`}
                                    alt=''></img>
                            </div>
                        </div>
                        <div className='swiper-pagination'></div>
                    </div>
                    <div className='swiper-button-prev'></div>
                    <div className='swiper-button-next'></div>
                </div>

                <div className='row justify-content-between gy-4 mt-4'>
                    <div className='col-lg-8'>
                        <div className='portfolio-description'>
                            <h2>{project.headline}</h2>
                            <p>{project.longerDescription}</p>
                        </div>
                    </div>

                    <div className='col-lg-3'>
                        <div className='portfolio-info'>
                            <h3>Project information</h3>
                            <ul>
                                <li>
                                    <strong>Category</strong>{" "}
                                    <span>{project.category}</span>
                                </li>
                                <li>
                                    <strong>Client</strong>{" "}
                                    <span>{project.client}</span>
                                </li>
                                <li>
                                    <strong>Project date</strong>{" "}
                                    <span>{project.date}</span>
                                </li>
                                <li>
                                    <strong>Project URL</strong>{" "}
                                    <a href={project.url}>{project.url}</a>
                                </li>
                                <li>
                                    <a
                                        href='#'
                                        className='btn-visit align-self-start'>
                                        Visit Website
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        // </StaticContent>
    );
};

export default ProjectDetailsSection;
