import React from 'react';
import './dashboard.css';

const Rent = () => {
    return (
        <>
            <div className="body">
                <div className="container">
            <div class="dashboard_window" id="dashboard_window"> 
             <div class="dashboard_form">  
              <strong>All Renting Product:</strong>
           <div class="list_selecter">            
            <select class  ="form-control" name="state" id="maxRows">

                         <option value="5000">Show ALL Rows</option>
                         <option value="5">5</option>
                         <option value="10">10</option>
                         <option value="15">15</option>
                         <option value="20">20</option>
                         <option value="50">50</option>
                         <option value="70">70</option>
                         <option value="100">100</option>
            </select>
           </div>
            <div class="show_product">          
        <table id="table-id">
          <tr>
            <th>Product Name</th>
            <th>Renter Name</th>
            <th>Vender Name</th>
            <th>Price</th>
            <th>Renting Date</th>
            <th>Renterning Date</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>  
        </table>

        </div>

            <div class='pagination-container' >
                <nav>
            
                  <ul class="pagination">
            
            <li data-page="prev" >
                <span> &gt; <span class="sr-only">(current)</span></span>
            </li>
                 
            <li data-page="next" id="prev">
               <span> &lt; <span class="sr-only">(current)</span></span>
            </li>
                  </ul>
            
                </nav>
                    </div>
                    </div>

                    </div>
                     </div>
            </div>
        </>
    )
}

export default Rent;
