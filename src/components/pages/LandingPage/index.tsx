
export interface ILandingPageProps {}
import menClothes from "src/app/assets/images/menClothes.png"
import MobileGadgets from "src/app/assets/images/Mobile&Gadgets.png"
import ConsumerElectronics from "src/app/assets/images/Consumer&Electronics.png"
import WomanClothes from "src/app/assets/images/WomanClothes.png"
import Watches from "src/app/assets/images/Watches.png"
import MenShoes from "src/app/assets/images/MenShoes.png"
import WomanShoes from "src/app/assets/images/WomanShoes.png"
import SportOutdoor from "src/app/assets/images/Sport&Outdoor.png"
import WomanBags from "src/app/assets/images/WomanBags.png"
import Cameras from "src/app/assets/images/Cameras.png"
import HomeAppliances from "src/app/assets/images/HomeAppliances.png"
import BooksStationery from "src/app/assets/images/Books&Stationery.png"

export default function LandingPage(props: ILandingPageProps) {
    return (
        <>

        <div className="offset-1"> 
            <table className="table table-bordered table-hover main-colored">
                <tbody >
                    <tr>
                        <th className="text-left ">CATEGORY</th>
                        </tr>
                    <tr className="p-2">
                        <th scope="row d-flex"> <img className="p-2 text-left ms-2 me-3" src={menClothes.src}/>Men Clothes </th>
                        </tr>
                    <tr>
                        <th scope="row d-flex"> <img className="p-2 text-left ms-2 me-3" src={MobileGadgets.src} />Mobile&Gadgets </th>
                        </tr>
                    <tr>
                        <th scope="row d-flex"> <img className="p-2 text-left ms-2 me-3" src={ConsumerElectronics.src} /> Consumer & Electronics</th>
                        </tr>
                    <tr>
                        <th scope="row d-flex"> <img className="p-2 text-left ms-2 me-3" src={WomanClothes.src} /> Woman Clothes </th>
                        </tr>
                    <tr>
                        <th scope="row d-flex"> <img className="p-2 text-left ms-2 me-3" src={Watches.src} /> Watches </th> 
                        </tr>
                    <tr>
                        <th scope="row d-flex"> <img className="p-2 text-left ms-2 me-3" src={MenShoes.src} /> Men Shoes </th> 
                        </tr>
                    <tr>
                        <th scope="row d-flex"> <img className="p-2 text-left ms-2 me-3" src={WomanShoes.src} /> Woman Shoes </th>
                        </tr>
                    <tr>
                        <th scope="row d-flex"> <img className="p-2 text-left ms-2 me-3" src={SportOutdoor.src} /> Sport & Outdoor </th>
                        </tr>
                    <tr>
                        <th scope="row d-flex"> <img className="p-2 text-left ms-2 me-3" src={WomanBags.src} /> Woman Bags </th>
                        </tr>
                    <tr>
                        <th scope="row d-flex"> <img className="p-2 text-left ms-2 me-3" src={Cameras.src} /> Cameras </th>
                        </tr>
                    <tr>
                        <th scope="row d-flex"> <img className="p-2 text-left ms-2 me-3" src={HomeAppliances.src} /> HomeAppliances </th>
                        </tr>
                    <tr>
                        <th scope="row d-flex"> <img className="p-2 text-left ms-2 me-3" src={BooksStationery.src} /> BooksStationery </th>
                        </tr>
                </tbody>           
                    
            </table>
        </div>
        
        </>
    );
}
