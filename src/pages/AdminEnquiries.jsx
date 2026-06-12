import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trash2, Eye, X, Mail, Phone, Calendar, CheckCircle, Clock, RefreshCw } from 'lucide-react';
import { getEnquiries, updateEnquiryStatus, deleteEnquiry } from '../services/enquiryService';
import './AdminEnquiries.css';

const AdminEnquiries = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);

  useEffect(() => {
    loadEnquiries();

    // Listen for storage changes from other tabs
    const handleStorageChange = (e) => {
      if (e.key === 'vivektech_enquiries') {
        loadEnquiries();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const loadEnquiries = () => {
    const data = getEnquiries();
    // Sort by newest first
    const sortedData = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    setEnquiries(sortedData);
  };

  const handleStatusChange = (id, newStatus) => {
    if (updateEnquiryStatus(id, newStatus)) {
      loadEnquiries();
      if (selectedEnquiry && selectedEnquiry.id === id) {
        setSelectedEnquiry({ ...selectedEnquiry, status: newStatus });
      }
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this enquiry?')) {
      if (deleteEnquiry(id)) {
        loadEnquiries();
        if (selectedEnquiry && selectedEnquiry.id === id) {
          setSelectedEnquiry(null);
        }
      }
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'New':
        return <span className="status-badge new"><Clock size={14} /> New</span>;
      case 'In Progress':
        return <span className="status-badge progress"><Clock size={14} /> In Progress</span>;
      case 'Completed':
        return <span className="status-badge completed"><CheckCircle size={14} /> Completed</span>;
      default:
        return <span className="status-badge">{status}</span>;
    }
  };

  return (
    <main className="admin-page section-padding">
      <div className="container">
        <div className="admin-header">
          <motion.h1
            className="page-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Enquiries <span className="text-gradient">Dashboard</span>
          </motion.h1>
          <motion.p
            className="page-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Manage and respond to your incoming client requests.
          </motion.p>
          <motion.button 
            className="btn-primary" 
            style={{ marginTop: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            onClick={loadEnquiries}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <RefreshCw size={16} /> Refresh Data
          </motion.button>
        </div>

        <div className="admin-content">
          <motion.div
            className="enquiries-table-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {enquiries.length === 0 ? (
              <div className="empty-state">
                <Mail size={48} />
                <h3>No Enquiries Yet</h3>
                <p>When someone contacts you, their message will appear here.</p>
              </div>
            ) : (
              <table className="enquiries-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Service</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {enquiries.map((enquiry) => (
                    <tr key={enquiry.id} className={selectedEnquiry?.id === enquiry.id ? 'active-row' : ''}>
                      <td>
                        <div className="user-info">
                          <strong>{enquiry.name}</strong>
                          <span className="user-email">{enquiry.email}</span>
                        </div>
                      </td>
                      <td>
                        <span className="service-tag">{enquiry.service || 'General'}</span>
                      </td>
                      <td>{formatDate(enquiry.createdAt)}</td>
                      <td>
                        <select
                          className={`status-select ${enquiry.status.toLowerCase().replace(' ', '-')}`}
                          value={enquiry.status}
                          onChange={(e) => handleStatusChange(enquiry.id, e.target.value)}
                        >
                          <option value="New">New</option>
                          <option value="In Progress">In Progress</option>
                          <option value="Completed">Completed</option>
                        </select>
                      </td>
                      <td>
                        <div className="action-buttons">
                          <button
                            className="btn-icon view-btn"
                            onClick={() => setSelectedEnquiry(enquiry)}
                            title="View Details"
                          >
                            <Eye size={18} />
                          </button>
                          <button
                            className="btn-icon delete-btn"
                            onClick={() => handleDelete(enquiry.id)}
                            title="Delete Enquiry"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </motion.div>

          {selectedEnquiry && (
            <motion.div
              className="enquiry-details-modal"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="modal-header">
                <h3>Enquiry Details</h3>
                <button className="close-btn" onClick={() => setSelectedEnquiry(null)}>
                  <X size={24} />
                </button>
              </div>
              <div className="modal-body">
                <div className="detail-group">
                  <div className="detail-header">
                    <h4>{selectedEnquiry.name}</h4>
                    {getStatusBadge(selectedEnquiry.status)}
                  </div>
                  <div className="contact-links">
                    <a href={`mailto:${selectedEnquiry.email}`} className="contact-link">
                      <Mail size={16} /> {selectedEnquiry.email}
                    </a>
                    {selectedEnquiry.phone && (
                      <a href={`tel:${selectedEnquiry.phone}`} className="contact-link">
                        <Phone size={16} /> {selectedEnquiry.phone}
                      </a>
                    )}
                  </div>
                </div>

                <div className="detail-group">
                  <h5><Calendar size={16} /> Submitted On</h5>
                  <p>{formatDate(selectedEnquiry.createdAt)}</p>
                </div>

                <div className="detail-group">
                  <h5>Service Requested</h5>
                  <span className="service-tag large">{selectedEnquiry.service || 'General Inquiry'}</span>
                </div>

                <div className="detail-group message-group">
                  <h5>Message</h5>
                  <div className="message-box">
                    <p>{selectedEnquiry.message}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </main>
  );
};

export default AdminEnquiries;
