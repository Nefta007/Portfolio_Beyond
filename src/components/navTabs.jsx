import { Link, useLocation } from 'react-router-dom';

function navTab(){
    const currentPage = useLocation().pathname;
    return(
        <nav>
            <ul className='nav nav-tab'>
                <li className='nav-item'>
                    <Link to='/' 
                    className={currentPage ==='/' ? 'nav-link active' : 'nav-link'}>
                        About
                    </Link>
                </li>
                <li className='/Portfolio'>
                    <Link to='/Portfolio' 
                    className={currentPage ==='/Portfolio' ? 'nav-link active' : 'nav-link'}>
                        Portfolio
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Contact' 
                    className={currentPage ==='/Contact' ? 'nav-link active' : 'nav-link'}>
                        Contact
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Resume' 
                    className={currentPage ==='/Resume' ? 'nav-link active' : 'nav-link'}>
                        Resume
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
export default navTab;