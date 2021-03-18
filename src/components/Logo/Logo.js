import React from 'react'
import { ReactComponent as ColorLogo} from 'assets/coupangLogos/logo-colorful.svg';
import { ReactComponent as BlackLogo} from 'assets/coupangLogos/logo-black.svg';
import { ReactComponent as MonoLogo} from 'assets/coupangLogos/logo-mono.svg';

const Logo = ( {type} ) => {
  return type === 'colorful' ? <ColorLogo/> : type === 'mono' ? <MonoLogo/> : <BlackLogo/>
}

Logo.defaultProps = {
  type : 'colorful'
}

export default Logo;
