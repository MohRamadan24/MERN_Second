import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faPhone, faArrowRight, faDoorOpen, faDownload } from '@fortawesome/free-solid-svg-icons';
// import { fa} from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faTwitter, faLinkedin, faDribbble, faBehance, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// Add the icons to the library
library.add(faBars, faPhone, faFacebook, faTwitter, faLinkedin, faArrowRight, faDribbble, faBehance, faDoorOpen, faGithub, faWhatsapp, faDownload);

export default library;