import Link from "next/link";
import StaticContent from "./StaticContent";

const BreadCrumbs = ({ title }: any) => {
    return (
        <StaticContent>
            <div
                className='breadcrumbs d-flex align-items-center'
                style={{
                    backgroundImage: "url('/static/img/breadcrumbs-bg.jpg')"
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
        </StaticContent>
    );
};

export default BreadCrumbs;
