const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

async function handleResponse(response) {
  if (!response.ok) {
    let message = `API request failed (${response.status})`;

    try {
      const errorData = await response.json();
      message = errorData.detail || errorData.title || message;
    } catch {
      // Keep the default error message.
    }

    throw new Error(message);
  }

  return response.json();
}

export async function getRegistrations({
  participantName = "",
  type = "",
  status = "",
  page = 1,
  pageSize = 10,
} = {}) {
  const params = new URLSearchParams();

  if (participantName.trim()) {
    params.set("participantName", participantName.trim());
  }

  // Matches Ronald's backend query parameter.
  if (type) {
    params.set("registrationType", type);
  }

  if (status) {
    params.set("status", status);
  }

  params.set("page", page);
  params.set("pageSize", pageSize);

  const response = await fetch(
    `${API_BASE_URL}/api/registrations?${params.toString()}`
  );

  return handleResponse(response);
}

export async function getSummary() {
  const response = await fetch(
    `${API_BASE_URL}/api/registrations/summary`
  );

  return handleResponse(response);
}