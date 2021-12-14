import "./style.css";
import React, {Component } from "react";
//import { MDCDataTable } from "@material/data-table";

//import $ from 'jquery'


class Table extends Component {

  constructor() {
    super();
    this.state = {
        staticTableData: [],
        dynamicTableData: []
    }
}

componentWillMount() {
  this.setState({staticTableData: [
    {
      name: "Mobile Device Programming",
      code: "3186",
      depart: "CIS",
      credits: "5",
    },
    {
      name: "Software Engineering: Project Management",
      code: "3119",
      depart: "CIS",
      credits: "5",
    },
    {
      name: "Entrepreneurship: Start-up your Innovative Business",
      code: "3085",
      depart: "EBI",
      credits: "6",
    },
  ]});
  
  // For Materials Table
  this.setState({dynamicTableData: [
    {
      name: "Mobile Device Programming",
      code: "3186",
      depart: "CIS",
      credits: "5",
    },
    {
      name: "Software Engineering: Project Management",
      code: "3119",
      depart: "CIS",
      credits: "5",
    },
    {
      name: "Entrepreneurship: Start-up your Innovative Business",
      code: "3085",
      depart: "EBI",
      credits: "6",
    },
  ]});

}
 
//Sorting Methods for material
 /* sortByCredit = () => {
    $('#credits_col').bind( "click",()=> {
      const sortOrder = $('#credits_col').attr('aria-sort');
      let sorted;
      if(sortOrder === 'ascending'){
        sorted = [...this.state.dynamicTableData].sort(
          (a, b) => b['credits'] - a['credits']
        );
      } else{
        sorted = [...this.state.dynamicTableData].sort(
          (a, b) => a['credits'] - b['credits']
        );
      } 
      this.setState({dynamicTableData: sorted});
      console.log(this.state.dynamicTableData);  
    });
  }


  sortByDepartment = () => {
    $('#department_col').bind( "click",()=> {
      const sortOrder = $('#department_col').attr('aria-sort');
      let sorted;
      if(sortOrder === 'ascending'){
        //to descendinf
        sorted = [...this.state.dynamicTableData].sort(
          (a, b) => b['depart'].localeCompare(a['depart'])
        );
      } else{
        //to ascending

        sorted = [...this.state.dynamicTableData].sort(
          (a, b) => a['depart'].localeCompare(b['depart'])
        );
      } 
      this.setState({dynamicTableData: sorted});
      console.log(this.state.dynamicTableData);  
    });
  }*/

  /*
  componentDidMount(){
    const dataTable = new MDCDataTable(document.querySelector('.mdc-data-table'));
    this.sortByCredit();
    this.sortByDepartment();
   }*/

  render(){
  
    return (
      <div id="Section">
        <h1 class="subHeading">Components</h1>
        <div>
          <div>
            <table class="lectures" aria-label="Lectures">
              <thead>
                <tr>
                  <th role="columnheader" scope="col">
                    Unit Name
                  </th>
                  <th role="columnheader" scope="col">
                    Unit Code
                  </th>
                  <th role="columnheader" scope="col">
                    Department
                  </th>
                  <th role="columnheader" scope="col">
                    Credits
                  </th>
                </tr>
              </thead>
              <tbody>
               
                {this.state.staticTableData.map((d, index) => (
                  <tr key={index}>
                    <td>{d.name}</td>
                    <td>{d.code}</td>
                    <td>{d.depart}</td>
                    <td>{d.credits}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
 {/* 
          <div id="MaterialTable">
            <div class="mdc-data-table">
              <table class="mdc-data-table__table" aria-label="Lectures">
                <thead>
                  <tr class="mdc-data-table__header-row">
                    <th
                      class="mdc-data-table__header-cell mdc-data-table__header-cell--with-sort"
                      role="columnheader"
                      scope="col"
                      aria-sort="none"
                      data-column-id="unit"
                    >
                      <div class="mdc-data-table__header-cell-wrapper">
                        <div class="mdc-data-table__header-cell-label">
                          Unit Name
                        </div>
                      </div>
                    </th>
                    <th
                      class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric mdc-data-table__header-cell--with-sort mdc-data-table__header-cell--sorted"
                      role="columnheader"
                      scope="col"
                      aria-sort="ascending"
                      data-column-id="code"
                    >
                      <div class="mdc-data-table__header-cell-wrapper">
                        <div class="mdc-data-table__header-cell-label">
                          Unit Code
                        </div>
                      </div>
                    </th>
                    <th
                      class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric mdc-data-table__header-cell--with-sort"
                      role="columnheader"
                      scope="col"
                      aria-sort="ascending"
                      data-column-id="department"
                      id = "department_col"
                    >
                      <div class="mdc-data-table__header-cell-wrapper">
                        <button
                          class="mdc-icon-button material-icons mdc-data-table__sort-icon-button"
                          aria-label="Sort by Department"
                          aria-describedby="credits-status-label"
                        >
                          arrow_upward
                        </button>
                        <div class="mdc-data-table__header-cell-label">
                          Department
                        </div>
                        <div
                          class="mdc-data-table__sort-status-label"
                          aria-hidden="true"
                          id="department-status-label"
                        ></div>
                      </div>
                    </th>
                    <th
                      class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric mdc-data-table__header-cell--with-sort credit"
                      role="columnheader"
                      scope="col"
                      aria-sort="ascending"
                      data-column-id="credits"
                      id = "credits_col"
                    >
                      <div class="mdc-data-table__header-cell-wrapper">
                        <button
                          class="mdc-icon-button material-icons mdc-data-table__sort-icon-button"
                          aria-label="Sort by Credits"
                          aria-describedby="credits-status-label"
                        >
                          arrow_upward
                        </button>
                        <div class="mdc-data-table__header-cell-label">
                          Credits
                        </div>
                        <div
                          class="mdc-data-table__sort-status-label"
                          aria-hidden="true"
                          id="credits-status-label"
                        ></div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody class="mdc-data-table__content">
                 
                  {this.state.dynamicTableData.map((d, index) => (
                    <tr class="mdc-data-table__row" key={index}>
                      <td class="mdc-data-table__cell">{d.name}</td>
                      <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                        {d.code}
                      </td>
                      <td class="mdc-data-table__cell">{d.depart}</td>
                      <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                        {d.credits}
                      </td>
                    </tr>
                  ))}
                  
                </tbody>
              </table>
            </div>
             
          </div>
         */}
        </div>
      </div>
    );
  }
  
  
}

export default Table;
