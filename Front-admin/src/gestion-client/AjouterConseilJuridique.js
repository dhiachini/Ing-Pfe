import React, { useState } from "react";
import {
  Card,
  CardBody,
  Col,
  Row,
  Container,
  CardHeader,
  Input,
  Label,
  Button,
  Form,
  Spinner
} from "reactstrap";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";
// Import FilePond styles
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import BreadCrumb from "../Components/Common/BreadCrumb";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const AjouterConseilJuridique = () => {
  const [selectedFiles, setselectedFiles] = useState([]);
  const [files, setFiles] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [pays, setPays] = useState("Tunisie"); // State for country selection

  const handleAcceptedFiles = (files) => {
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setselectedFiles(files);
  };

  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("pays", pays); 
    if (files[0]) {
      formData.append("file", files[0].file);
    }

    try {
      const response = await axios.post("http://localhost:3700/api/conseiljuridique", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Conseil juridique ajouté avec succès!");
      // Clear the form after successful submission
      setTitle("");
      setDescription("");
      setFiles([]);
    } catch (error) {
      toast.error("Erreur lors de l'ajout du conseil juridique.");
      console.error("Error creating Conseil Juridique:", error);
    } finally {
      setLoading(false);
    }
  };
  

  document.title = "Ajouter conseil juridique | ALGETUN";

  return (
    <React.Fragment>
      <ToastContainer />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb
            title="Ajouter conseil juridique"
            pageTitle="Volet juridique"
          />
          <Card>
            <CardBody>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col lg={6}>
                    <div className="mb-3">
                      <Label className="form-label" htmlFor="Fullname">
                        Titre
                      </Label>
                      <Input
                        type="text"
                        className="form-control"
                        name="Fullname"
                        placeholder="Titre"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        disabled={loading}
                      />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="mb-3">
                      <Label className="form-label" htmlFor="countrySelect">
                        Pays
                      </Label>
                      <Input
                        type="select"
                        className="form-control"
                        id="countrySelect"
                        value={pays}
                        onChange={(e) => setPays(e.target.value)}
                        disabled={loading}
                      >
                        <option value="Tunisie">Tunisie</option>
                        <option value="Algérie">Algérie</option>
                      </Input>
                    </div>
                  </Col>
                </Row>
                <div className="mb-3">
                  <Label className="form-label" htmlFor="Companyname">
                    Description
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    name="Companyname"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    disabled={loading}
                  />
                </div>
                <Row className="mt-2">
                  <Col lg={12}>
                    <Card>
                      <CardHeader>
                        <h4 className="card-title mb-0">Téléchargement de pièce jointe</h4>
                      </CardHeader>
                      <CardBody>
                        <p className="text-muted">
                          Veuillez télécharger une pièce jointe concernant le conseil juridique. Vous avez uniquement le droit d'ajouter un seul fichier PDF.
                        </p>
                        <FilePond
                          files={files}
                          onupdatefiles={setFiles}
                          allowMultiple={false}
                          maxFiles={1}
                          name="file"
                          className="filepond filepond-input-multiple"
                          acceptedFileTypes={['application/pdf']}
                          disabled={loading}
                        />
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <div className="d-flex justify-content-end mt-3">
                  <Button type="submit" color="primary" disabled={loading}>
                    {loading ? <Spinner size="sm" /> : "Ajouter"}
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default AjouterConseilJuridique;
