import React from "react";
import Button from "./Button";

function PassengersTable({ passengers, onRemove }) {
  return (
    <table className="table-auto border-collapse border border-gray-300 w-full">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-300 px-4 py-2">ID</th>
          <th className="border border-gray-300 px-4 py-2">Name</th>
          <th className="border border-gray-300 px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {passengers.map((passenger) => (
          <tr key={passenger?.id}>
            <td className="border border-gray-300 px-4 py-2">
              {passenger?.id}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {passenger?.fullName}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <Button
                label="Delete"
                type="button"
                onClick={() => onRemove(passenger?.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PassengersTable;
