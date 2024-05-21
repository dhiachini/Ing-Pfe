import React from "react";
import DataTable from "react-data-table-component";
import { Card, CardBody, CardHeader, DropdownItem, DropdownMenu, DropdownToggle, Input, UncontrolledDropdown } from "reactstrap";
import { Link } from 'react-router-dom';
const ListeClient = () => {

    const data = [
        {
            srNo: "01",
            id: "VLZ-452",
            purchaseId: "VLZ1400087402",
            title: "Post launch reminder/ post list",
            user: "Joseph Parker",
            assigned: "Alexis Clarke",
            createdBy: "Joseph Parker",
            createDate: "03 Oct, 2021", 
            priority: "High",
        },
        {
            srNo: "02",
            id: "VLZ-453",
            purchaseId: "VLZ1400087425",
            title: "Additional Calendar",
            user: "Diana Kohler",
            assigned: "Admin",
            createdBy: "Mary Rucker",
            createDate: "05 Oct, 2021",
            priority: "Medium",
        },
        {
            srNo: "03",
            id: "VLZ-454",
            purchaseId: "VLZ1400087438",
            title: "Make a creating an account profile",
            user: "Tonya Noble",
            assigned: "Admin",
            createdBy: "Tonya Noble",
            createDate: "27 April, 2022",
            priority: "Low",
        },
        {
            srNo: "01",
            id: "VLZ-452",
            purchaseId: "VLZ1400087402",
            title: "Post launch reminder/ post list",
            user: "Joseph Parker",
            assigned: "Alexis Clarke",
            createdBy: "Joseph Parker",
            createDate: "03 Oct, 2021",
            priority: "High",
        },
        {
            srNo: "02",
            id: "VLZ-453",
            purchaseId: "VLZ1400087425",
            title: "Additional Calendar",
            user: "Diana Kohler",
            assigned: "Admin",
            createdBy: "Mary Rucker",
            createDate: "05 Oct, 2021",
            priority: "Medium",
        },
        {
            srNo: "03",
            id: "VLZ-454",
            purchaseId: "VLZ1400087438",
            title: "Make a creating an account profile",
            user: "Tonya Noble",
            assigned: "Admin",
            createdBy: "Tonya Noble",
            createDate: "27 April, 2022",
            priority: "Low",
        },
        {
            srNo: "01",
            id: "VLZ-452",
            purchaseId: "VLZ1400087402",
            title: "Post launch reminder/ post list",
            user: "Joseph Parker",
            assigned: "Alexis Clarke",
            createdBy: "Joseph Parker",
            createDate: "03 Oct, 2021",
            priority: "High",
        },
        {
            srNo: "02",
            id: "VLZ-453",
            purchaseId: "VLZ1400087425",
            title: "Additional Calendar",
            user: "Diana Kohler",
            assigned: "Admin",
            createdBy: "Mary Rucker",
            createDate: "05 Oct, 2021",
            priority: "Medium",
        },
        {
            srNo: "03",
            id: "VLZ-454",
            purchaseId: "VLZ1400087438",
            title: "Make a creating an account profile",
            user: "Tonya Noble",
            assigned: "Admin",
            createdBy: "Tonya Noble",
            createDate: "27 April, 2022",
            priority: "Low",
        },
        // Add more data here...
    ];

    const columns = [
        {
            name: <Input className="form-check-input fs-15" type="checkbox" name="checkAll" value="option1" />,
            cell: () => (
                <input className="form-check-input fs-15" type="checkbox" name="checkAll" value="option1" />
            ),
        },
        {
            name: <span className='font-weight-bold fs-13'>ID Client</span>,
            selector: row => row.id,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>Project</span>,
            selector: row => row.title,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>Client</span>,
            selector: row => row.user,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>Create Date</span>,
            selector: row => row.createDate,
            sortable: true
        },
       
        {
            name: <span className='font-weight-bold fs-13'>Action</span>,
            sortable: true,
            cell: (row) => {
                return (
                    <UncontrolledDropdown className="dropdown d-inline-block">
                        <DropdownToggle className="btn btn-soft-secondary btn-sm" tag="button">
                            <i className="ri-more-fill align-middle"></i>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-end">
                            <DropdownItem className='edit-item-btn'>
                            </DropdownItem>
                            <DropdownItem href="/projectdetails"><i className="ri-eye-fill align-bottom me-2 text-muted"></i> View</DropdownItem>

                            <DropdownItem href="/editproject"><i className="ri-pencil-fill align-bottom me-2 text-muted"></i>Edit</DropdownItem>
                            <DropdownItem className='remove-item-btn'> <i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i> Delete </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                );
            },
        },
    ];

    return (        
        <div className="page-content">
            <Card>
                <CardHeader className="d-flex justify-content-between align-items-center">
                    <span>Client List</span>
                    <div>
                        <Link to="/addclient" className="btn btn-soft-success me-2">
                            <i className="ri-add-circle-line align-middle me-1"></i> Add Client
                        </Link>
                        <Link to="/addproject" className="btn btn-soft-info">
                            <i className="ri-add-circle-line align-middle me-1"></i> Add Project
                        </Link>
                    </div>
                </CardHeader>
                <CardBody>
                    <DataTable
                        columns={columns}
                        data={data}
                        pagination
                    // highlightOnHover={true}
                    />
                </CardBody>
            </Card>
        </div>
    );
}

export default ListeClient;
