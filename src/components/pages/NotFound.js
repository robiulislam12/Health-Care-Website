import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Img from '../../assets/404.svg';

export default function NotFound() {
    const history= useHistory();

    const backToHome = () =>{
        history.push('/')
    }
    const back = () =>{
        history.goBack()
    }
    return (
        <div className='py-10 flex lg:flex-col md:flex-col sm:flex-col justify-center w-100 items-center not-found'>
         <img className="w-50" src={Img} alt="Not Found Img" />
        <div className='pt-10'>
        <Button onClick={backToHome} sx={{ m: 2 }} variant="danger">Back to Home</Button> 
        
        <Button className="ml-6 " onClick={back} sx={{ m: 2 }} variant="success">Go Back</Button> 
        </div>
        </div>
    )
}
