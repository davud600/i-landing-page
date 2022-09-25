import Link from "next/link";

const BreadCrumbs = ({ title }: any) => {
    return (
        <div
            className='breadcrumbs d-flex align-items-center'
            style={{
                backgroundImage: "url('/assets/img/breadcrumbs-bg.jpg')"
            }}>
            <div
                className='container position-relative d-flex flex-column align-items-center'
                data-aos='fade'>
                <h2>{title}</h2>
                <ol>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>{title}</li>
                </ol>
            </div>
        </div>
    );
};

export default BreadCrumbs;
