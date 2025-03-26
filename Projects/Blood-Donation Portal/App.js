import React, { useState } from "react";

const BloodDonationPortal = () => {
  const [donors, setDonors] = useState([
    { name: "John Doe", bloodGroup: "O+", location: "Mumbai" },
    { name: "Alice Smith", bloodGroup: "A-", location: "Delhi" },
  ]);
  const [form, setForm] = useState({ name: "", bloodGroup: "", location: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDonors([...donors, form]);
    setForm({ name: "", bloodGroup: "", location: "" });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Blood Donation Portal</h1>
      
      {/* Donor Registration Form */}
      <div className="max-w-md mx-auto bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Register as a Donor</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-2 mb-3 border rounded"
            required
          />
          <input
            type="text"
            name="bloodGroup"
            value={form.bloodGroup}
            onChange={handleChange}
            placeholder="Blood Group"
            className="w-full p-2 mb-3 border rounded"
            required
          />
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="Location"
            className="w-full p-2 mb-3 border rounded"
            required
          />
          <button className="w-full bg-red-500 text-white p-2 rounded">Submit</button>
        </form>
      </div>

      {/* Donor List */}
      <div className="max-w-md mx-auto bg-white p-4 mt-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Available Donors</h2>
        <ul>
          {donors.map((donor, index) => (
            <li key={index} className="p-2 border-b">
              {donor.name} - {donor.bloodGroup} ({donor.location})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BloodDonationPortal;
