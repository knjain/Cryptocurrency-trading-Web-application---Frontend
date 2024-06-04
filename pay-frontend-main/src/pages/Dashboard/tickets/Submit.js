import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-hot-toast";
import { baseURL } from "../../../constants/Constant";
import axios from "axios";
import { createTickets } from "../../../services/userService";
import { FiLoader } from "react-icons/fi";

const Submit = () => {
  const fileInputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    if (!ticketform.department) {
      toast.error("Please select a department.");
      return false;
    }

    if (!ticketform.service) {
      toast.error("Please select a service.");
      return false;
    }

    if (!ticketform.subject) {
      toast.error("Please provide a subject.");
      return false;
    }

    if (!ticketform.message) {
      toast.error("Please provide a message.");
      return false;
    }

    return true;
  };
  const [ticketform, setticketform] = useState({
    department: "",
    service: "",
    subject: "",
    message: "",
    attachment: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setticketform({ ...ticketform, [name]: value });
  };

  const handleAttachmentChange = (e) => {
    const file = e.target.files[0];
    setticketform({ ...ticketform, attachment: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsLoading(true);
    try {
      const formData = {
        department: ticketform.department,
        service: ticketform.service,
        subject: ticketform.subject,
        description: ticketform.message,
        status: "Open",
      };

      const response = await createTickets(formData);

      if (response.status === 201) {
        const ticketId = response.data.data.ticketId; // Assuming the response contains the ticket ID
        if (ticketform.attachment) {
          // Upload the file separately
          const fileFormData = new FormData();
          fileFormData.append("docType", "TICKET_DOC");
          fileFormData.append("file", ticketform.attachment);
          const fileUploadResponse = await axios.post(
            `${baseURL}/api/upload/${ticketId}`,
            fileFormData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );

          if (fileUploadResponse.data.success) {
            toast.success("Ticket and file uploaded successfully");
            // Reset the form fields after successful ticket creation and file upload
            setticketform({
              department: "",
              service: "",
              subject: "",
              message: "",
              attachment: null,
            });
          } else {
            toast.error("Failed to upload file");
          }
        } else {
          toast.success("Ticket Created Successfully");
        }
      } else {
        toast.error("Failed to create ticket");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setticketform({
        department: "",
        service: "",
        subject: "",
        message: "",
        attachment: "",
      });
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-5xl w-full mx-auto px-6">
      <h1 className="text-5xl font-semibold my-10">Tickets</h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-5xl w-full mx-auto"
        encType="multipart/form-data"
      >
        <div className="grid grid-cols-2 mb-4 gap-4">
          <div>
            <p className="mb-2">Choose Department</p>
            <select
              name="department"
              onChange={handleChange}
              className="px-2 py-2 rounded-lg bg-black w-full border border-solid"
              value={ticketform.department}
            >
              <option value="">Select Department</option>
              <option value="Admin support">Admin Support</option>
              <option value="Technical Support">Technical Support</option>
            </select>
          </div>

          <div>
            <p className="mb-2">Choose Related Service</p>
            <select
              name="service"
              onChange={handleChange}
              className="px-2 py-2 rounded-lg bg-black w-full border border-solid"
              value={ticketform.service}
            >
              <option value="">Select Service</option>
              <option value="Package Activation">Package Activation</option>
              <option value="Downline Activation">Downline Activation</option>
              <option value="Authentication">Authentication</option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <p className="mb-2">Subject</p>
          <input
            name="subject"
            onChange={handleChange}
            className="px-2 py-2 rounded-lg bg-black w-full border border-solid"
            value={ticketform.subject}
          />
        </div>

        <div>
          <p className="mb-2">Message</p>
          <textarea
            name="message"
            onChange={handleChange}
            className="px-2 py-2 rounded-lg bg-black w-full min-h-[150px] border border-solid"
            value={ticketform.message}
          />
        </div>

        <div className="mt-4 mb-4">
          <p className="mb-2">Attachment (optional)</p>
          <input
            type="file"
            ref={fileInputRef}
            name="attachment"
            onChange={handleAttachmentChange}
            className="px-2 py-2 rounded-lg bg-black w-full border border-solid"
          />
        </div>
        <div className="w-full flex justify-center align-center">
          <button
            type="submit"
            className={`w-1/2  font-semibold bg-gradient-to-r from-newStart via-newMid to-newEnd rounded-full p-3 py-2
           flex justify-center item-center  
              ${isLoading ? "cursor-not-allowed opacity-70" : ""}
              
              `}
            disabled={isLoading}
          >
            {isLoading ? (
              <FiLoader className="animate-spin text-blue-500" size={24} />
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Submit;
