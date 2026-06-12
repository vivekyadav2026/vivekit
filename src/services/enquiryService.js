const STORAGE_KEY = 'vivektech_enquiries';

// Helper to get all enquiries
export const getEnquiries = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

// Create a new enquiry
export const saveEnquiry = (enquiryData) => {
  const enquiries = getEnquiries();
  const newEnquiry = {
    id: Date.now().toString(),
    ...enquiryData,
    status: 'New', // Default status: New, In Progress, Completed
    createdAt: new Date().toISOString(),
  };
  
  enquiries.push(newEnquiry);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(enquiries));
  return newEnquiry;
};

// Update status of an enquiry
export const updateEnquiryStatus = (id, newStatus) => {
  const enquiries = getEnquiries();
  const index = enquiries.findIndex(e => e.id === id);
  
  if (index !== -1) {
    enquiries[index].status = newStatus;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(enquiries));
    return true;
  }
  return false;
};

// Delete an enquiry
export const deleteEnquiry = (id) => {
  const enquiries = getEnquiries();
  const filtered = enquiries.filter(e => e.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  return true;
};
