import React from "react";
import Modal from "react-bootstrap/Modal"
import LeafletContainer from "../LeafletContainer";

function TripModal(props) {
    return (
        <Modal
            id="modal"
            show={props.show}
            onHide={props.onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.trip.end_location}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>
                    {props.trip.leaving_date}
                    {props.trip.flexible_date
                        ? <span className="badge badge-pill badge-success">Flexible</span>
                        : <span className="badge badge-pill badge-danger">Not Flexible</span>}
                </h4>
                <p>${props.trip.cost}</p>
                <p>{props.trip.seats_available}</p>
                {props.trip.smoking
                    ? <span className="badge badge-pill badge-success">Smoking</span>
                    : <span className="badge badge-pill badge-danger">No Smoking</span>}
                {props.trip.luggage
                    ? <span className="badge badge-pill badge-success">Luggage Space</span>
                    : <span className="badge badge-pill badge-danger">No Luggage Space</span>}

                <p>{props.trip.comment}</p>


                <LeafletContainer
                    markerPositionStart={props.modalStartCoords}
                    markerPositionEnd={props.modalEndCoords}
                />

            </Modal.Body>
            <Modal.Footer>
                {/* TODO: Make connect button do something */}
                <button className="btn btn-success" onClick={() => alert("Connected!")}>Connect</button>
                <button className="btn btn-danger" onClick={props.onHide}>Close</button>
            </Modal.Footer>
        </Modal>
    );
}

export default TripModal;