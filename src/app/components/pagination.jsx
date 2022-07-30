/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import _ from 'lodash'
import React from 'react';

const Pagination = (props) => {
    const {itemsCount, pageSize} = props;
    const pageCount = Math.ceil(itemsCount / pageSize);
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);
    console.log(pages);
    return (
        <nav>
            <ul className="pagination">
                {pages.map((page) => (
                    <li className="page-item" key={'page_' + page}>
                        <a className="page-link">{page}</a>
                    </li>
                ))}
                
            </ul>
     </nav>
    );
};
 
export default Pagination;