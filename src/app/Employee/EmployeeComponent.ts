import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { Employee } from './EmployeeModel';


@Component({
    selector: 'app-employee',
    templateUrl: './EmployeeComponent.html',
    styleUrls: ['./EmployeeComponent.css']
})
export class EmployeeComponent {
    _searchTerm: String;
    filteredEmployees: Employee[];

    get searchTerm(): String {
        return this._searchTerm;
    }

    columnDefs = [
        {
            headerName: 'First Name', field: 'firstName', sortable: true, filter: true, checkboxSelection: true, editable: true, filterParams: { defaultOption: 'startsWith' }
        },
        { headerName: 'Last Name', field: 'lastName', sortable: true, filter: true, editable: true },
        { headerName: 'Phone number', field: 'phoneNumber', sortable: true, filter: true, editable: true },
        { headerName: 'E-mail', field: 'email', sortable: true, filter: true, editable: true },
        { headerName: 'Status', field: 'status', sortable: true, filter: true, editable: true },
        { headerName: 'Birth Date', field: 'birthDate', sortable: true, filter: true, editable: true },
        { headerName: 'Gender', field: 'gender', sortable: true, filter: true, editable: true },
        { headerName: 'Hire date', field: 'hireDate', sortable: true, filter: true, editable: true },
        { headerName: 'Job title', field: 'jobTitle', sortable: true, filter: true, editable: true },

    ];

    rowData = [
        { firstName: 'Kerim', lastName: 'Bektasevic', phoneNumber: 3876145678, email: 'aaaa@hotmail.com', status: "good", birthDate: "24.7.1999", gender: "male", hireDate: '11.12.2018', jobTitle: "Neki" },
        { firstName: 'Almin', lastName: 'Hebibovic', phoneNumber: 387612345, email: 'asd@hotmail.com', status: "good", birthDate: "24.7.1999", gender: "male", hireDate: '11.12.2018', jobTitle: "Neki" },
        { firstName: 'Haris', lastName: 'Bikic', phoneNumber: 3876126345, email: 'asd123@hotmail.com', status: "good", birthDate: "31.10.1999", gender: "male", hireDate: '11.11.2018', jobTitle: "Neki" }
    ];

    public zaposleni = [];

    constructor(private http: HttpClient) { }

    private _url: string = "src/assets/menu/osobe.json";

    public gridApi: any;
    public columnApi: any;

    /*
    ngOnInit() {
        this.rowData = this.http.get<Employee[]>(this._url);
    }*/
    fName: String = "ASD";
    Add() {
        this.gridApi.updateRowData({
            add: [{ firstName: '', lastName: '', phoneNumber: '', email: '', status: '', birthDate: '', gender: '', hireDate: '', jobTitle: '' }]
        });
    }

    getAllRows() {
        let rowData = [];
        this.gridApi.forEachNode(node => rowData.push(node.data));
        return rowData;
      }

    Find() {
        let ime = (<HTMLInputElement>document.getElementById("ime")).value;
        let prezime = (<HTMLInputElement>document.getElementById("prezime")).value;
        let brojTelefona = (<HTMLInputElement>document.getElementById("brojTelefona")).value;

        let datumZaposljavanja = (<HTMLInputElement>document.getElementById("datumZaposljavanja")).value;
        let job = (<HTMLInputElement>document.getElementById("job")).value;
        
        let date = new Date(datumZaposljavanja);
        let day = date.getDate();
        let month = date.getMonth()+1;
        let year = date.getFullYear();
        console.log("Please open",day,month,year);
        
        let data = this.getAllRows();

       for(let i=0 ; i<data.length ; i++){
            let employee = data[i];
            let datum = employee.hireDate;
            let niz = datum.split(".");

            if(employee.firstName == ime && employee.lastName == prezime && employee.phoneNumber == brojTelefona 
                && day == niz[0] && month == niz[1] && year == niz[2] && job == employee.jobTitle){
                    
                    this.gridApi.setRowData([]);

                    this.gridApi.updateRowData({
                        add: [{ firstName: ime, lastName: prezime, phoneNumber: brojTelefona,
                             email: employee.email,
                             status: employee.status, birthDate: employee.birthDate, 
                             gender: employee.gender, hireDate: employee.hireDate, jobTitle: employee.jobTitle }]
                    });
                }
       }

    }

    rowsSelected() {
        return this.gridApi && this.gridApi.getSelectedRows().length > 0;
    }

    DeleteRow() {
        var focusedRow = this.gridApi.getSelectedRows();
        this.gridApi.updateRowData({ remove: focusedRow });
    }

    OnGridReady(params) {
        this.gridApi = params.api;
        this.columnApi = params.columnApi;
    }


    OnInput(event: any) {
        this.fName = event.target.value;
    }
}
