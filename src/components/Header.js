import './Header.css' 

function HeaderPage() {
  return (
    <div className="App-header ">
      <header className="header container">
        <div className='App-header-div row'>
            <img className='col-sm-6' src='http://216.48.176.229/static/8.png' style={{width: 70}} />
            <div className='col-sm-6 header-txt'>
              <span style={{fontSize: 16, fontWeight: 600}}>Property Tax Portal</span>
              <div style={{fontSize: 14}}>Government of Manipur</div>
            </div>
            
        </div>
      </header>
    </div>
  );
}

export default HeaderPage;
