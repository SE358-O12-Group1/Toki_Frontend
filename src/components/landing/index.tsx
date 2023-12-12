export interface ILandingPageProps {}
import menClothes from 'public/assets/images/menClothes.png';
import MobileGadgets from 'public/assets/images/Mobile&Gadgets.png';
import ConsumerElectronics from 'public/assets/images/Consumer&Electronics.png';
import WomanClothes from 'public/assets/images/WomanClothes.png';
import Watches from 'public/assets/images/Watches.png';
import MenShoes from 'public/assets/images/MenShoes.png';
import WomanShoes from 'public/assets/images/WomanShoes.png';
import SportOutdoor from 'public/assets/images/Sport&Outdoor.png';
import WomenBags from 'public/assets/images/WomanBags.png';
import Cameras from 'public/assets/images/Cameras.png';
import HomeAppliances from 'public/assets/images/HomeAppliances.png';
import BooksStationery from 'public/assets/images/Books&Stationery.png';
import Bank from 'public/assets/images/Bank.png';
import Product from '@/components/landing/product';

export default function LandingPage(props: ILandingPageProps) {
    return (
        <>
            <div className='row d-flex'>
                <div className='col mb-5 ms-5'>
                    <div className='col'>
                        <div
                            className='col offset-1 ms-5 border shadow-sm'
                            style={{ maxWidth: 290, borderRadius: 5 }}
                        >
                            <div className=' font-weight-bold mt-3  text-center'>
                                CATEGORY
                            </div>

                            <button
                                type='button'
                                className='btn'
                                style={{ minWidth: 280 }}
                            >
                                <div className='row my-1 ms-1'>
                                    <div className='d-flex'>
                                        <img src={menClothes.src} />
                                        <div
                                            className='ms-3 mt-2'
                                            style={{ fontSize: 16 }}
                                        >
                                            Men Clothes
                                        </div>
                                    </div>
                                </div>
                            </button>

                            <button
                                type='button'
                                className='btn'
                                style={{ minWidth: 280 }}
                            >
                                <div className='row my-1 ms-1'>
                                    <div className='d-flex'>
                                        <img src={MobileGadgets.src} />
                                        <div
                                            className='ms-3 mt-2'
                                            style={{ fontSize: 16 }}
                                        >
                                            Mobile & Gadgets
                                        </div>
                                    </div>
                                </div>
                            </button>

                            <button
                                type='button'
                                className='btn'
                                style={{ minWidth: 280 }}
                            >
                                <div className='row my-1 ms-1'>
                                    <div className='d-flex'>
                                        <img src={ConsumerElectronics.src} />
                                        <div
                                            className='ms-3 mt-2'
                                            style={{ fontSize: 16 }}
                                        >
                                            Consumer & Electronics
                                        </div>
                                    </div>
                                </div>
                            </button>

                            <button
                                type='button'
                                className='btn'
                                style={{ minWidth: 280 }}
                            >
                                <div className='row my-1 ms-1'>
                                    <div className='d-flex'>
                                        <img src={WomanClothes.src} />
                                        <div
                                            className='ms-3 mt-2'
                                            style={{ fontSize: 16 }}
                                        >
                                            Woman Clothes
                                        </div>
                                    </div>
                                </div>
                            </button>

                            <button
                                type='button'
                                className='btn'
                                style={{ minWidth: 280 }}
                            >
                                <div className='row my-1 ms-1'>
                                    <div className='d-flex'>
                                        <img src={Watches.src} />
                                        <div
                                            className='ms-3 mt-2'
                                            style={{ fontSize: 16 }}
                                        >
                                            Watches
                                        </div>
                                    </div>
                                </div>
                            </button>

                            <button
                                type='button'
                                className='btn'
                                style={{ minWidth: 280 }}
                            >
                                <div className='row my-1 ms-1'>
                                    <div className='d-flex'>
                                        <img src={MenShoes.src} />
                                        <div
                                            className='ms-3 mt-2'
                                            style={{ fontSize: 16 }}
                                        >
                                            Men Shoes
                                        </div>
                                    </div>
                                </div>
                            </button>

                            <button
                                type='button'
                                className='btn'
                                style={{ minWidth: 280 }}
                            >
                                <div className='row my-1 ms-1'>
                                    <div className='d-flex'>
                                        <img src={WomanShoes.src} />
                                        <div
                                            className='ms-3 mt-2'
                                            style={{ fontSize: 16 }}
                                        >
                                            Woman Shoes
                                        </div>
                                    </div>
                                </div>
                            </button>

                            <button
                                type='button'
                                className='btn'
                                style={{ minWidth: 280 }}
                            >
                                <div className='row my-1 ms-1'>
                                    <div className='d-flex'>
                                        <img src={SportOutdoor.src} />
                                        <div
                                            className='ms-3 mt-2'
                                            style={{ fontSize: 16 }}
                                        >
                                            Sport &Outdoor
                                        </div>
                                    </div>
                                </div>
                            </button>

                            <button
                                type='button'
                                className='btn'
                                style={{ minWidth: 280 }}
                            >
                                <div className='row my-1 ms-1'>
                                    <div className='d-flex'>
                                        <img src={WomenBags.src} />
                                        <div
                                            className='ms-3 mt-2'
                                            style={{ fontSize: 16 }}
                                        >
                                            Women Bags
                                        </div>
                                    </div>
                                </div>
                            </button>

                            <button
                                type='button'
                                className='btn'
                                style={{ minWidth: 280 }}
                            >
                                <div className='row my-1 ms-1'>
                                    <div className='d-flex'>
                                        <img src={Cameras.src} />
                                        <div
                                            className='ms-3 mt-2'
                                            style={{ fontSize: 16 }}
                                        >
                                            Cameras
                                        </div>
                                    </div>
                                </div>
                            </button>

                            <button
                                type='button'
                                className='btn'
                                style={{ minWidth: 280 }}
                            >
                                <div className='row my-1 ms-1'>
                                    <div className='d-flex'>
                                        <img src={HomeAppliances.src} />
                                        <div
                                            className='ms-3 mt-2'
                                            style={{ fontSize: 16 }}
                                        >
                                            Home & Appliances
                                        </div>
                                    </div>
                                </div>
                            </button>

                            <button
                                type='button'
                                className='btn'
                                style={{ minWidth: 280 }}
                            >
                                <div className='row my-1 ms-1'>
                                    <div className='d-flex'>
                                        <img src={BooksStationery.src} />
                                        <div
                                            className='ms-3 mt-2'
                                            style={{ fontSize: 16 }}
                                        >
                                            Books & Stationery
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </div>

                        <div
                            className='col offset-1 ms-5 mt-4 border shadow-sm'
                            style={{ maxWidth: 290, borderRadius: 5 }}
                        >
                            <button
                                type='button'
                                className='btn'
                                style={{ minWidth: 280 }}
                            >
                                <div className='row my-1 ms-1'>
                                    <div className='d-flex'>
                                        <img src={Bank.src} />
                                        <div className='mt- ms-3 mt-1'>
                                            Start selling with Toki
                                        </div>
                                    </div>
                                </div>
                            </button>
                            <div />
                        </div>
                    </div>
                </div>

                <div className='col-8 mb-5 me-5 '>
                    <div className='row'>
                        <div className='col'>
                            <Product> </Product>
                            <Product> </Product>
                            <Product> </Product>
                        </div>

                        <div className='col'>
                            <Product> </Product>
                            <Product> </Product>
                            <Product> </Product>
                        </div>
                        <div className='col'>
                            <Product> </Product>
                            <Product> </Product>
                            <Product> </Product>
                        </div>
                        <div className='col'>
                            <Product> </Product>
                            <Product> </Product>
                            <Product> </Product>
                        </div>
                    </div>

                    <div className='row offset-4'>
                        <div className='ms-4 mt-4'>
                            <nav aria-label='Page navigation '>
                                <ul className='pagination'>
                                    <li className='page-item'>
                                        <a
                                            className='page-link'
                                            href='#'
                                            aria-label='Previous'
                                        >
                                            <span aria-hidden='true'>
                                                &laquo;
                                            </span>
                                        </a>
                                    </li>
                                    <li className='page-item'>
                                        <a className='page-link' href='#'>
                                            1
                                        </a>
                                    </li>
                                    <li className='page-item'>
                                        <a className='page-link' href='#'>
                                            2
                                        </a>
                                    </li>
                                    <li className='page-item'>
                                        <a className='page-link' href='#'>
                                            3
                                        </a>
                                    </li>
                                    <li className='page-item'>
                                        <a className='page-link' href='#'>
                                            4
                                        </a>
                                    </li>
                                    <li className='page-item'>
                                        <a className='page-link' href='#'>
                                            ...
                                        </a>
                                    </li>
                                    <li className='page-item'>
                                        <a
                                            className='page-link'
                                            href='#'
                                            aria-label='Next'
                                        >
                                            <span aria-hidden='true'>
                                                &raquo;
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
