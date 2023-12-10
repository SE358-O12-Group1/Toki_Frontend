
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
import Product from "@/components/product"


export default function LandingPage(props: ILandingPageProps) {
    return (
        <>
        <div className="row d-flex">
            <div className="col offset-1 mb-5"> 
                <div className="col">
                    <div className="col offset-1 border shadow-sm" style={{maxWidth:280 , borderRadius:5}}> 
                    <div className=" font-weight-bold text-center  mt-3">CATEGORY</div>

                    <button type="button" className='btn' style={{minWidth:280}}> 
                        <div className="row my-1 ms-1">
                                <div className="d-flex">
                                    <img src={menClothes.src } /> 
                                    <div className="ms-3 mt-2" style={{fontSize:16}}>
                                        Men Clothes
                                        </div>
                                    </div>
                        </div>
                    </button>

                    <button type="button" className='btn' style={{minWidth:280}}> 
                        <div className="row my-1 ms-1">
                                <div className="d-flex">
                                    <img src={MobileGadgets.src } /> 
                                    <div className="ms-3 mt-2" style={{fontSize:16}}>
                                        Mobile & Gadgets
                                        </div>
                                    </div>
                        </div>
                    </button>

                    <button type="button" className='btn' style={{minWidth:280}}> 
                        <div className="row my-1 ms-1">
                                <div className="d-flex">
                                    <img src={ConsumerElectronics.src } /> 
                                    <div className="ms-3 mt-2" style={{fontSize:16}}>
                                        Consumer & Electronics
                                        </div>
                                    </div>
                        </div>
                    </button>

                    <button type="button" className='btn' style={{minWidth:280}}> 
                        <div className="row my-1 ms-1">
                                <div className="d-flex">
                                    <img src={WomanClothes.src } /> 
                                    <div className="ms-3 mt-2" style={{fontSize:16}}>
                                        Woman Clothes
                                        </div>
                                    </div>
                        </div>
                    </button>

                    <button type="button" className='btn' style={{minWidth:280}}> 
                        <div className="row my-1 ms-1">
                                <div className="d-flex">
                                    <img src={Watches.src } /> 
                                    <div className="ms-3 mt-2" style={{fontSize:16}}>
                                        Watches 
                                        </div>
                                    </div>
                        </div>
                    </button>

                    <button type="button" className='btn' style={{minWidth:280}}> 
                        <div className="row my-1 ms-1">
                                <div className="d-flex">
                                    <img src={MenShoes.src } /> 
                                    <div className="ms-3 mt-2" style={{fontSize:16}}>
                                        Men Shoes
                                        </div>
                                    </div>
                        </div>
                    </button>

                    <button type="button" className='btn' style={{minWidth:280}}> 
                        <div className="row my-1 ms-1">
                                <div className="d-flex">
                                    <img src={WomanShoes.src } /> 
                                    <div className="ms-3 mt-2" style={{fontSize:16}}>
                                        Woman Shoes
                                        </div>
                                    </div>
                        </div>
                    </button>

                    <button type="button" className='btn' style={{minWidth:280}}> 
                        <div className="row my-1 ms-1">
                                <div className="d-flex">
                                    <img src={SportOutdoor.src } /> 
                                    <div className="ms-3 mt-2" style={{fontSize:16}}>
                                        Sport &Outdoor
                                        </div>
                                    </div>
                        </div>
                    </button>

                    <button type="button" className='btn' style={{minWidth:280}}> 
                        <div className="row my-1 ms-1">
                                <div className="d-flex">
                                    <img src={WomenBags.src } /> 
                                    <div className="ms-3 mt-2" style={{fontSize:16}}>
                                        Women Bags
                                        </div>
                                    </div>
                        </div>
                    </button>

                    <button type="button" className='btn' style={{minWidth:280}}> 
                        <div className="row my-1 ms-1">
                                <div className="d-flex">
                                    <img src={Cameras.src } /> 
                                    <div className="ms-3 mt-2" style={{fontSize:16}}>
                                        Cameras
                                        </div>
                                    </div>
                        </div>
                    </button>

                    <button type="button" className='btn' style={{minWidth:280}}> 
                        <div className="row my-1 ms-1">
                                <div className="d-flex">
                                    <img src={HomeAppliances.src } /> 
                                    <div className="ms-3 mt-2" style={{fontSize:16}}>
                                        Home & Appliances
                                        </div>
                                    </div>
                        </div>
                    </button>

                    <button type="button" className='btn' style={{minWidth:280}}> 
                        <div className="row my-1 ms-1">
                                <div className="d-flex">
                                    <img src={BooksStationery.src } /> 
                                    <div className="ms-3 mt-2" style={{fontSize:16}}>
                                        Books & Stationery
                                        </div>
                                    </div>
                        </div>
                    </button>
                </div>

                <div className="col offset-1 border shadow-sm mt-4" style={{maxWidth:280 , borderRadius:5}}>
                    <button type="button" className='btn' style={{minWidth:280}}> 
                        <div className="row my-1 ms-1">
                            <div className="d-flex">
                                <img src={Bank.src } /> 
                                <div className="ms-3 mt- mt-1">
                                    Start selling with Toki
                                    </div>
                                </div>
                            </div>
                        
                    </button>
                <div/>
            </div>
        </div>
    </div>
            
            <div className="col-8 d-flex mb-5">
                <div className="row">
                    <Product> </Product>
                    <Product> </Product>
                    <Product> </Product>
                </div>

                <div className="row">
                    <Product> </Product>
                    <Product> </Product>
                    <Product> </Product>
                </div>
                <div className="row">
                    <Product> </Product>
                    <Product> </Product>
                    <Product> </Product>
                </div>
                <div className="row">
                    <Product> </Product>
                    <Product> </Product>
                    <Product> </Product>
                </div>



            </div>

        </div>
        </>
    );
}
