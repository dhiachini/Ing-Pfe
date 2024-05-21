import React, { useState } from 'react';
import BreadCrumb from "../Components/Common/BreadCrumb";
import {
  Card,
  CardBody,
  Col,
  Container,
  CardHeader,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  Input,
  Label,
  FormFeedback,
  Form,
} from "reactstrap";

// Redux
import { useDispatch } from "react-redux";
import { addNewProduct as onAddNewProduct, updateProduct as onUpdateProduct } from "../store/ecommerce/action";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import classnames from "classnames";
import Dropzone from "react-dropzone";
import { Link, useNavigate } from "react-router-dom";

//formik
import { useFormik } from "formik";
import * as Yup from "yup";

// Import React FilePond
import { registerPlugin } from "react-filepond";
import Flatpickr from "react-flatpickr";
import Select from "react-select";
// Import FilePond styles
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const ReclamationDetails = () => {
    document.title = "Create Product | Velzon - React Admin & Dashboard Template";

    const history = useNavigate();
    const dispatch = useDispatch();
  
    const [customActiveTab, setcustomActiveTab] = useState("1");
    const toggleCustom = (tab) => {
      if (customActiveTab !== tab) {
        setcustomActiveTab(tab);
      }
    };
    const [selectedFiles, setselectedFiles] = useState([]);
    const [selectedGroup, setselectedGroup] = useState(null);
    const [selectedStatus, setselectedStatus] = useState(null);
    const [selectedVisibility, setselectedVisibility] = useState(null);
  
  
    function handleAcceptedFiles(files) {
      files.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
          formattedSize: formatBytes(file.size),
        })
      );
      setselectedFiles(files);
    }
  
    function handleSelectGroup(selectedGroup) {
      setselectedGroup(selectedGroup);
    }
  
    function handleSelectStatus(selectedStatus) {
      setselectedStatus(selectedStatus);
    }
  
    function handleSelectVisibility(selectedVisibility) {
      setselectedVisibility(selectedVisibility);
    }
  
    /**
     * Formats the size
     */
    function formatBytes(bytes, decimals = 2) {
      if (bytes === 0) return "0 Bytes";
      const k = 1024;
      const dm = decimals < 0 ? 0 : decimals;
      const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    }
  
    const productCategory = [
      {
        options: [
          { label: "All", value: "All" },
          { label: "Appliances", value: "Kitchen Storage & Containers" },
          { label: "Fashion", value: "Clothes" },
          { label: "Electronics", value: "Electronics" },
          { label: "Grocery", value: "Grocery" },
          { label: "Home & Furniture", value: "Furniture" },
          { label: "Kids", value: "Kids" },
          { label: "Mobiles", value: "Mobiles" },
        ],
      },
    ];
  
    const dateFormat = () => {
      let d = new Date(),
        months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      let h = (d.getHours() % 12) || 12;
      let ampm = d.getHours() < 12 ? "AM" : "PM";
      return ((d.getDate() + ' ' + months[d.getMonth()] + ', ' + d.getFullYear() + ", " + h + ":" + d.getMinutes() + " " + ampm).toString());
    };
  
    const [date, setDate] = useState(dateFormat());
  
    const dateformate = (e) => {
      const dateString = e.toString().split(" ");
      let time = dateString[4];
      let H = +time.substr(0, 2);
      let h = (H % 12) || 12;
      h = (h <= 9) ? h = ("0" + h) : h;
      let ampm = H < 12 ? "AM" : "PM";
      time = h + time.substr(2, 3) + " " + ampm;
  
      const date = dateString[2] + " " + dateString[1] + ", " + dateString[3];
      const orderDate = (date + ", " + time).toString();
      setDate(orderDate);
    };
  
    const productStatus = [
      {
        options: [
          { label: "Draft", value: "draft" },
          { label: "Published", value: "published" },
          { label: "Scheduled", value: "scheduled" },
        ],
      },
    ];
  
    const productVisibility = [
      {
        options: [
          { label: "Hidden", value: "Hidden" },
          { label: "Public", value: "Public" },
        ],
      },
    ];
  
    const validation = useFormik({
      enableReinitialize: true,
  
      initialValues: {
        name: "",
        price: "",
        stock: "",
        orders: "",
        category: "",
        publishedDate: "",
        status: "",
        rating: 4.5,
        manufacturer_name: "",
        manufacturer_brand: "",
        product_discount: "",
        meta_title: "",
        meta_keyword: "",
        product_tags: "",
      },
      validationSchema: Yup.object({
        name: Yup.string().required("Please Enter a Product Title"),
        price: Yup.string().required("Please Enter a Product Price"),
        stock: Yup.string().required("Please Enter a Product stock"),
        orders: Yup.string().required("Please Enter a Product orders"),
        category: Yup.string().required("Please Enter a Product category"),
        status: Yup.string().required("Please Enter a Product status"),
        manufacturer_name: Yup.string().required("Please Enter a Manufacturer Name"),
        manufacturer_brand: Yup.string().required("Please Enter a Manufacturer Brand"),
        product_discount: Yup.string().required("Please Enter a Product Discount"),
        meta_title: Yup.string().required("Please Enter a Meta Title"),
        meta_keyword: Yup.string().required("Please Enter a Meta Keyword"),
        product_tags: Yup.string().required("Please Enter a Product Tags"),
      }),
      onSubmit: (values) => {
        const newProduct = {
          _id: (Math.floor(Math.random() * (30 - 20)) + 20).toString(),
          name: values.name,
          price: values.price,
          stock: values.stock,
          orders: values.orders,
          category: values.category,
          publishedDate: date,
          status: values.status,
          rating: 4.5,
        };
        // save new product
        dispatch(onAddNewProduct(newProduct));
        history("/apps-ecommerce-products");
        validation.resetForm();
      }
    });
    
    return (
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Reclamation details" pageTitle="Reclamations liste" />
  
          
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  validation.handleSubmit();
                  return false;
                }}>
                <Card>
                  <CardBody>
                    <div className="mb-3">
                      <Label className="form-label" htmlFor="product-title-input">
                        object
                      </Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="product-title-input"
                        placeholder="login page error"
                        name="name"
                        value={validation.values.name || ""}
                        onBlur={validation.handleBlur}
                        onChange={validation.handleChange}
                        invalid={validation.errors.name && validation.touched.name ? true : false}
                      />
                      {validation.errors.name && validation.touched.name ? (
                        <FormFeedback type="invalid">{validation.errors.name}</FormFeedback>
                      ) : null}
                    </div>
                    <div>
                      <Label>Description</Label>
  
                      <CKEditor
                        editor={ClassicEditor}
                        data="<p>
                        Tommy Hilfiger men striped pink sweatshirt. Crafted with
                        cotton. Material composition is 100% organic cotton.
                        This is one of the world’s leading designer lifestyle
                        brands and is internationally recognized for celebrating
                        the essence of classic American cool style, featuring
                        preppy with a twist designs.
                      </p>
                      <ul>
                        <li>Full Sleeve</li>
                        <li>Cotton</li>
                        <li>All Sizes available</li>
                        <li>4 Different Color</li>
                      </ul>"
                        onReady={(editor) => {
                          // You can store the "editor" and use when it is needed.
                        }}
                      />
                    </div>
                  </CardBody>
                </Card>
                <Card>
                  <CardHeader>
                    <div>
                      
                         <label> Publisher informations</label>

                    </div> 
                      
                        
                    
                  </CardHeader>
  
                  <CardBody>
                    <TabContent activeTab={customActiveTab}>
                      <TabPane id="addproduct-general-info" tabId="1">
                        <Row>
                          <Col lg={6}>
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="manufacturer-name-input"
                              >
                                Client Name
                              </label>
                              <Input
                                type="text"
                                className="form-control"
                                id="manufacturer-name-input"
                                name="manufacturer_name"
                                placeholder="Enter manufacturer name"
                                value={validation.values.manufacturer_name || ""}
                                onBlur={validation.handleBlur}
                                onChange={validation.handleChange}
                                invalid={validation.errors.manufacturer_name && validation.touched.manufacturer_name ? true : false}
                              />
                              {validation.errors.manufacturer_name && validation.touched.manufacturer_name ? (
                                <FormFeedback type="invalid">{validation.errors.manufacturer_name}</FormFeedback>
                              ) : null}
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="manufacturer-brand-input"
                              >
                                ID Client
                              </label>
                              <Input
                                type="text"
                                className="form-control"
                                id="manufacturer-brand-input"
                                name="manufacturer_brand"
                                placeholder="Enter manufacturer brand"
                                value={validation.values.manufacturer_brand || ""}
                                onBlur={validation.handleBlur}
                                onChange={validation.handleChange}
                                invalid={validation.errors.manufacturer_brand && validation.touched.manufacturer_brand ? true : false}
                              />
                              {validation.errors.manufacturer_brand && validation.touched.manufacturer_brand ? (
                                <FormFeedback type="invalid">{validation.errors.manufacturer_brand}</FormFeedback>
                              ) : null}
                            </div>
                          </Col>
                        </Row>
                        
                      </TabPane>
  
                     
                    </TabContent>
                  </CardBody>
                </Card>
  
                <Card>
                  <CardHeader>
                    <h5 className="card-title mb-0">Attachment file</h5>
                  </CardHeader>
                  <CardBody>
                     <h5 className="fs-14 mb-1">Add project reclamation Attachment file</h5>
               
  
                      <Dropzone
                        onDrop={(acceptedFiles) => {
                          handleAcceptedFiles(acceptedFiles);
                        }}
                      >
                        {({ getRootProps, getInputProps }) => (
                          <div className="dropzone dz-clickable">
                            <div
                              className="dz-message needsclick"
                              {...getRootProps()}
                            >
                              <div className="mb-3">
                                <i className="display-4 text-muted ri-upload-cloud-2-fill" />
                              </div>
                              <h5>Drop files here or click to upload.</h5>
                            </div>
                          </div>
                        )}
                      </Dropzone>
                      <div className="list-unstyled mb-0" id="file-previews">
                        {selectedFiles.map((f, i) => {
                          return (
                            <Card
                              className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                              key={i + "-file"}
                            >
                              <div className="p-2">
                                <Row className="align-items-center">
                                  <Col className="col-auto">
                                    <img
                                      data-dz-thumbnail=""
                                      height="80"
                                      className="avatar-sm rounded bg-light"
                                      alt={f.name}
                                      src={f.preview}
                                    />
                                  </Col>
                                  <Col>
                                    <Link
                                      to="#"
                                      className="text-muted font-weight-bold"
                                    >
                                      {f.name}
                                    </Link>
                                    <p className="mb-0">
                                      <strong>{f.formattedSize}</strong>
                                    </p>
                                  </Col>
                                </Row>
                              </div>
                            </Card>
                          );
                        })}
                      </div>
                    
                  </CardBody>
                </Card>
  
                
  
                <div className="text-end mb-3">
                  <button type="submit" className="btn btn-success w-sm">
                    Submit
                  </button>
                </div>
              </Form>
            
  
            <Col lg={4}>
              
             
            </Col>
          
        </Container>
      </div>
    );
};

export default ReclamationDetails; // Export the component as the default export
