import IMG from '../../assets/images/1.webp';
import IMG1 from '../../assets/images/2.webp';
import IMG2 from '../../assets/images/3.webp';
import IMG3 from '../../assets/images/4.webp';
import IMG4 from '../../assets/images/5.webp';
import IMG5 from '../../assets/images/6.webp';


// const access_token = localStorage.getItem("token");
export default function RunnerInn() {

    return (
        <>
            <section className="section section-gallery">
                <div className="">
                    <div className="hot_sp" style={{ paddingTop: 70, paddingBottom: 50 }}>
                        <h2 style={{ textAlign: 'center', paddingTop: 10 }}>
                            <a style={{ fontSize: 28, color: 'black', textDecoration: 'none' }} href="">Thương hiệu</a>
                        </h2>
                    </div>
                    <div className="list-gallery clearfix">
                        <ul className="shoes-gp">
                            <li>
                                <div className="gallery_item">
                                    <img className="img-resize" src={IMG} alt="" />
                                </div>
                            </li>
                            <li>
                                <div className="gallery_item">
                                    <img className="img-resize" src={IMG1} alt="" />
                                </div>
                            </li>
                            <li>
                                <div className="gallery_item">
                                    <img className="img-resize" src={IMG2} alt="" />
                                </div>
                            </li>
                            <li>
                                <div className="gallery_item">
                                    <img className="img-resize" src={IMG3} alt="" />
                                </div>
                            </li>
                            <li>
                                <div className="gallery_item">
                                    <img className="img-resize" src={IMG4} alt="" />
                                </div>
                            </li>
                            <li>
                                <div className="gallery_item">
                                    <img className="img-resize" src={IMG5} alt="" />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}