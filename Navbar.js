import React from 'react';
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">{props.aboutText}</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-primary" type="submit">Search</button>
          </form>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
          {props.mode === 'dark' && (
            <>
              <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}>
                <input className="form-check-input" onClick={() => props.toggleColor('#097969')} type="checkbox" role="switch" id="flexSwitchCheckGreen" />
                <label className="form-check-label" htmlFor="flexSwitchCheckGreen">Cadmium Green</label>
              </div>
              <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}>
                <input className="form-check-input" onClick={() => props.toggleColor('#C10C79')} type="checkbox" role="switch" id="flexSwitchCheckRed" />
                <label className="form-check-label" htmlFor="flexSwitchCheckRed">Pink</label>
              </div>
              <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}>
                <input className="form-check-input" onClick={() => props.toggleColor('#800080')} type="checkbox" role="switch" id="flexSwitchCheckBrown" />
                <label className="form-check-label" htmlFor="flexSwitchCheckBrown">Purple</label>
              </div>
              <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}>
                <input className="form-check-input" onClick={() => props.toggleColor('#808000')} type="checkbox" role="switch" id="flexSwitchCheckPeach" />
                <label className="form-check-label" htmlFor="flexSwitchCheckPeach">Olive</label>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
