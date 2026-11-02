
const API_BASE_URL = import.meta.env.VITE_API_URL?.replace(/\/+$/, "");

if (!API_BASE_URL) {
  throw new Error("VITE_API_URL is not configured.");
}

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ApiResponse {
  message?: string;
}

// Send contact form information to the backend
export const sendContactMessage = async (
  formData: ContactFormData
): Promise<ApiResponse> => {

  const response = await fetch(`${API_BASE_URL}/api/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data: ApiResponse = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unable to send your message.");
  }

  return data;
};
