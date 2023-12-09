import './Mainpage.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Mainpage() {
    const onChange = ()=> {

    }
    const onClickItem = ()=>{

    }
    const onClickThumb = () => {

    }
  return (
    <div className="App-body">
      <div className='row'> 
        <div className='col-sm-8'>
        
            <div>
                <Carousel infiniteLoop={true} autoPlay={true} showStatus={false} showArrows={true} showThumbs={false} interval={5000}>
                    <div>
                    <img src="http://216.48.176.229/static/3.png" className='carousal-img'/>
                    <p className="legend">Manipur Property Tax</p>
                    </div>
                    <div>
                    <img src="http://216.48.176.229/static/5.png" className='carousal-img' />
                    <p className="legend">Manipur Property Tax</p>
                    </div>
                    <div>
                    <img src="http://216.48.176.229/static/6.png" className='carousal-img' />
                    <p className="legend">Manipur Property Tax</p>
                    </div>
                </Carousel>
            </div>
        </div>
        <div className='col-sm-4 background-img'>
            <div className='sign-in-as'>
                <img src="http://216.48.176.229/static/8.png" className='signinas-img'/>
                <div style={{fontSize: 25, marginBottom: 30, textAlign: 'center', color: '#105531'}}>Sign in as</div>
                <div>
                    <button className='btn btn-primary' style={{marginRight: 15}}  onClick={() => window.location.replace('http://localhost:3000/digit-ui/citizen/login')} >Citizen</button>
                    <button className='btn btn-primary'>Employee</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
  
}
// ReactDOM.render(<Mainpage />, document.querySelector('.demo-carousel'));

export default Mainpage;
