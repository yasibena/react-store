import React from 'react'
import './pagination.css'
import { useThemeContext } from '../context/ThemContext'

export default function Pagination({ nPages, currentPage, setCurrentPage }) {

    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

    const goToNextPage = () => {
        if (currentPage !== nPages) setCurrentPage(currentPage + 1)
    }
    const goToPrevPage = () => {
        if (currentPage !== 1) setCurrentPage(currentPage - 1)
    }

    const theme = useThemeContext();
    const darkMode = theme.darkMode;

    return (
        <div className={darkMode ? 'pagination-container pagination-container-dark-theme' : 'pagination-container'}>
        <ul className={darkMode ? 'pagination-lists pagination-lists-dark-theme' : 'pagination-lists'}>
            <li className="page-item">
                <a className={darkMode ? 'page-link page-link-dark' : "page-link" }
                    onClick={goToPrevPage} 
                    href='#'>
                    
                    صفحه قبلی
                </a>
            </li>
            {pageNumbers.map(pgNumber => (
                <li key={pgNumber}  
                    className= {`page-item ${currentPage == pgNumber ? `${darkMode ? 'active-dark-theme' : 'active'}` : ''} `} >

                    <a onClick={() => setCurrentPage(pgNumber)}  
                        className={darkMode ? 'page-link page-link-dark' : "page-link" }
                        href='#'>
                        
                        {pgNumber}
                    </a>
                </li>
            ))}
            <li className="page-item">
                <a className={darkMode ? 'page-link page-link-dark' : "page-link" }
                    onClick={goToNextPage}
                    href='#'>
                    
                    صفحه بعدی
                </a>
            </li>
        </ul>
    </div>
)
}
    

