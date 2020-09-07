import React from "react";
import { Header, Icon } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import { useStateValue } from "../state";
import axios from "axios";
import { Patient } from "../types";
import { apiBaseUrl } from "../constants";

const PatientInfoPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [{ patient }, dispatch] = useStateValue();

  React.useEffect(() => {
    if (patient && patient.id === id) {
      return;
    }

    const fetchPatient = async () => {
      try {
        console.log("fetching");
        
        const { data: patientById } = await axios.get<Patient>(
          `${apiBaseUrl}/patients/${id}`
        );
        dispatch({ type: "SET_PATIENT", payload: patientById });
      } catch (e) {
        console.error(e);
      }
    };
    fetchPatient();
  // eslint-disable-next-line
  }, [id, dispatch]);

  if (!patient) {
    return <div>Patient not found!</div>;
  }

  return (
    <div>
      <Header as="h2">
        {patient.name}
        <Icon
          name={patient.gender === "male"
            ? "mars"
            : patient.gender === "female"
              ? "venus"
              : "other gender"}
        />
      </Header>

      <div>ssn: {patient.ssn}</div>
      <div>occupation: {patient.occupation}</div>
    </div>
  );
};

export default PatientInfoPage;