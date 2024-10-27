import React from "react";
import { X, Plus } from "lucide-react";

function EditModal({ editedProfile, setEditedProfile, onClose, onSave }) {
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Edit Profile</h2>
          <button onClick={onClose} className="close-btn">
            <X size={24} />
          </button>
        </div>

        <div className="modal-form">
          <div className="form-group">
            <div className="profile-upload-container">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setEditedProfile({
                        ...editedProfile,
                        profilePicture: reader.result,
                      });
                    };
                    reader.readAsDataURL(file);
                  }
                }}
                className="profile-upload-input"
                id="profile-upload"
              />
              <label htmlFor="profile-upload" className="profile-upload-label">
                {editedProfile.profilePicture ? (
                  <img
                    src={editedProfile.profilePicture}
                    alt="Profile preview"
                    className="profile-preview"
                  />
                ) : (
                  <div className="label-edit">
                    <Plus className="upload-icon" />
                    <span>Edit profile</span>
                  </div>
                )}
              </label>
            </div>
          </div>
        </div>

        <div className="modal-form">
          <div className="form-group">
            <div>
              <label>Name</label>
              <input
                type="text"
                value={editedProfile.name}
                onChange={(e) =>
                  setEditedProfile({ ...editedProfile, name: e.target.value })
                }
                className="form-input"
              />
            </div>
          </div>

          <div className="form-group">
            <div>
              <label>Email</label>
              <input
                type="email"
                value={editedProfile.mail}
                onChange={(e) =>
                  setEditedProfile({ ...editedProfile, mail: e.target.value })
                }
                className="form-input"
              />
            </div>
          </div>

          <div className="form-group">
            <div>
              <label>About</label>
              <textarea
                value={editedProfile.about}
                onChange={(e) =>
                  setEditedProfile({ ...editedProfile, about: e.target.value })
                }
                className="form-textarea"
                rows={4}
              />
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button onClick={onClose} className="btn-secondary">
            Cancel
          </button>
          <button onClick={onSave} className="btn-primary">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
