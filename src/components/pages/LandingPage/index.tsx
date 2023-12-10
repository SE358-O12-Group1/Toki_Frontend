
export interface ILandingPageProps {}
import menClothes from "src/app/assets/images/menClothes.png"
import MobileGadgets from "src/app/assets/images/Mobile&Gadgets.png"
import ConsumerElectronics from "src/app/assets/images/Consumer&Electronics.png"
import WomanClothes from "src/app/assets/images/WomanClothes.png"
import Watches from "src/app/assets/images/Watches.png"
import MenShoes from "src/app/assets/images/MenShoes.png"
import WomanShoes from "src/app/assets/images/WomanShoes.png"
import SportOutdoor from "src/app/assets/images/Sport&Outdoor.png"
import WomenBags from "src/app/assets/images/WomanBags.png"
import Cameras from "src/app/assets/images/Cameras.png"
import HomeAppliances from "src/app/assets/images/HomeAppliances.png"
import BooksStationery from "src/app/assets/images/Books&Stationery.png"
import Bank from "src/app/assets/images/Bank.png"


export default function LandingPage(props: ILandingPageProps) {
    return (
        <>

        <div className="col offset-1 border shadow-sm" style={{maxWidth:300 , borderRadius:5}}> 
            <div className=" font-weight-bold text-center  mt-3">CATEGORY</div>

            <button type="button" className='btn' style={{minWidth:300}}> 
                <div className="row p-2 ms-1">
                        <div className="d-flex">
                            <img src={menClothes.src } /> 
                            <div className="ms-3 mt-2">
                                Men Clothes
                                </div>
                            </div>
                </div>
            </button>

            <button type="button" className='btn' style={{minWidth:300}}> 
                <div className="row p-2 ms-1">
                        <div className="d-flex">
                            <img src={MobileGadgets.src } /> 
                            <div className="ms-3 mt-2">
                                Mobile & Gadgets
                                </div>
                            </div>
                </div>
            </button>

            <button type="button" className='btn' style={{minWidth:300}}> 
                <div className="row p-2 ms-1">
                        <div className="d-flex">
                            <img src={ConsumerElectronics.src } /> 
                            <div className="ms-3 mt-2">
                                Consumer & Electronics
                                </div>
                            </div>
                </div>
            </button>

            <button type="button" className='btn' style={{minWidth:300}}> 
                <div className="row p-2 ms-1">
                        <div className="d-flex">
                            <img src={WomanClothes.src } /> 
                            <div className="ms-3 mt-2">
                                Woman Clothes
                                </div>
                            </div>
                </div>
            </button>

            <button type="button" className='btn' style={{minWidth:300}}> 
                <div className="row p-2 ms-1">
                        <div className="d-flex">
                            <img src={Watches.src } /> 
                            <div className="ms-3 mt-2">
                                Watches 
                                </div>
                            </div>
                </div>
            </button>

            <button type="button" className='btn' style={{minWidth:300}}> 
                <div className="row p-2 ms-1">
                        <div className="d-flex">
                            <img src={MenShoes.src } /> 
                            <div className="ms-3 mt-2">
                                Men Shoes
                                </div>
                            </div>
                </div>
            </button>

            <button type="button" className='btn' style={{minWidth:300}}> 
                <div className="row p-2 ms-1">
                        <div className="d-flex">
                            <img src={WomanShoes.src } /> 
                            <div className="ms-3 mt-2">
                                Woman Shoes
                                </div>
                            </div>
                </div>
            </button>

            <button type="button" className='btn' style={{minWidth:300}}> 
                <div className="row p-2 ms-1">
                        <div className="d-flex">
                            <img src={SportOutdoor.src } /> 
                            <div className="ms-3 mt-2">
                                Sport &Outdoor
                                </div>
                            </div>
                </div>
            </button>

            <button type="button" className='btn' style={{minWidth:300}}> 
                <div className="row p-2 ms-1">
                        <div className="d-flex">
                            <img src={WomenBags.src } /> 
                            <div className="ms-3 mt-2">
                                Women Bags
                                </div>
                            </div>
                </div>
            </button>

            <button type="button" className='btn' style={{minWidth:300}}> 
                <div className="row p-2 ms-1">
                        <div className="d-flex">
                            <img src={Cameras.src } /> 
                            <div className="ms-3 mt-2">
                                Cameras
                                </div>
                            </div>
                </div>
            </button>

            <button type="button" className='btn' style={{minWidth:300}}> 
                <div className="row p-2 ms-1">
                        <div className="d-flex">
                            <img src={HomeAppliances.src } /> 
                            <div className="ms-3 mt-2">
                                Home & Appliances
                                </div>
                            </div>
                </div>
            </button>

            <button type="button" className='btn' style={{minWidth:300}}> 
                <div className="row p-2 ms-1">
                        <div className="d-flex">
                            <img src={BooksStationery.src } /> 
                            <div className="ms-3 mt-2">
                                Books & Stationery
                                </div>
                            </div>
                </div>
            </button>

            
        </div>

        <div className="col offset-1 border shadow-sm mt-4" style={{maxWidth:300 , borderRadius:5}}>
            <button type="button" className='btn' style={{minWidth:300}}> 
                <div className="row p-2 ms-1">
                    <div className="d-flex">
                        <img src={Bank.src } /> 
                        <div className="ms-3 mt- mt-1">
                            Start selling with Toki
                            </div>
                        </div>
                    </div>
                </button>
        </div>
        </>
    );
}
