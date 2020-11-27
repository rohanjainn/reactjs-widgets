import React from 'react';

const Link=({className,href,children})=>{

const onLinkClick=(e)=>{

    if(e.ctrlKey){
        return;
    }
    e.preventDefault();
    window.history.pushState({},'',href);

    const navEvent=new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);

}

return (
    <a style={{fontWeight:'bold',fontSize:'20px',color:'darkolivegreen'}} onClick={onLinkClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;