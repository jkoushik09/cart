import { Fragment } from "react";
// import  ReactDom  from 'react-dom';
import  ReactDOM  from "react-dom";
const Modal = ({onClose, children}) =>
{  
   return ReactDOM.createPortal( 
        <Fragment>
        <div className="loader-overlay">
        </div>
          <div className="modal">
          <div className="content">
            {children}
          </div>
            <button type="close" onClick={onClose}>X</button>
          </div>
        </Fragment>
        ,
        document.getElementById("modal-root")
        );     
      
   
};
export default Modal;

