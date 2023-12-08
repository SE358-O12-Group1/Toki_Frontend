
export interface ILandingPageProps {}
import menClothes from "src/app/assets/images/menClothes.png"
export default function LandingPage(props: ILandingPageProps) {
    return (
        <>
        <div className="offset-1"> 
        <table className="table table-bordered table-hover main-colored ">
            <div className="col">
                <thead>
                    <tr>
                        <th scope="col">CATEGORY</th>
                    </tr>
                </thead>
                <tbody className="">
                    <tr>
                        <th scope="row"> <img src={menClothes.src}/> </th>
                    </tr>
                    <tr>1</tr>
                    <tr>1</tr>
                    <tr>1</tr>
                    <tr>1</tr>
                    <tr>1</tr>
                    <tr>1</tr>
                </tbody>
            </div>
            <div className="col"></div>
            
            
        </table></div>
        
            <h1>Landing Page</h1>
        </>
    );
}
