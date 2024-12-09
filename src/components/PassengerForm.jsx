import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllCities } from "../api/cities-api";
import FormItem from "./FormItem";
import FormDropdown from "./FormDropdown";
import Button from "./Button";
import { updatePassenger } from "../api/passengers-api";

function PassengerForm({
  entity: passenger = {},
  isNew: isNewPassenger = false,
}) {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState(1);

  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (passenger && !isNewPassenger) {
      setFirstName(passenger.firstName || "");
      setLastName(passenger.lastName || "");
      setPhoneNumber(passenger.phoneNumber || "");
      setEmail(passenger.email || "");
      setCity(passenger.city?.id || 0);
    }
  }, [passenger, isNewPassenger]);

  useEffect(() => {
    const loadCities = async () => {
      try {
        const response = await fetchAllCities();
        setCities(response);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    loadCities();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedPassenger = {
        id: isNewPassenger ? undefined : passenger.id,
        firstName,
        lastName,
        phoneNumber,
        email,
        cityId: city,
      };

      const response = await updatePassenger(updatedPassenger, isNewPassenger);
      const passengerId = response?.id || passenger.id;

      navigate(`/passengers/${passengerId}`);
    } catch (error) {
      console.error("Error updating passenger:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormItem
        type={"text"}
        label={"First Name"}
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <FormItem
        type={"text"}
        label={"Last Name"}
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />

      <FormItem
        type={"text"}
        label={"Phone Number"}
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />

      <FormItem
        type={"text"}
        label={"Email"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <FormDropdown
        label={"City"}
        list={cities}
        value={city}
        onChange={(e) => setCity(Number(e.target.value))}
      />

      <Button icon="submit" type="submit" label="Submit" />
    </form>
  );
}

export default PassengerForm;
