import React, { useState } from "react";
import Ri from "../Images/OIF.jpg";

const EventProf = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null); // Track the selected notification
  const [searchQuery, setSearchQuery] = useState(""); // Track the search query
  const eventImage = "./event-image.jpg"; // Replace with your event image URL
  const eventName = "Event Name"; // Replace with your event name
  const followersCount = 1000; // Replace with your followers count

  const notifications = [
    // Array of notification objects
    { id: 1, message: "Notification 1", data: "Notification 1 Data" },
    { id: 2, message: "Notification 2", data: "Notification 2 Data" },
    { id: 3, message: "Notification 3", data: "Notification 3 Data" },
    // Add more notifications as needed
  ];

  const handleNotificationsClick = () => {
    setShowNotifications(!showNotifications);
  };

  const handleNotificationClick = (notification) => {
    setSelectedNotification(notification);
  };

  const handleBackButtonClick = () => {
    setSelectedNotification(null);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredNotifications = notifications.filter((notification) =>
    notification.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={Ri}
              alt="Event"
              width="100"
              style={{
                marginRight: "7px",
                borderRadius: "50%",
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
                filter: "grayscale(40%)",
              }}
            />
            <span className="text-secondary">{eventName}</span>
          </a>

          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>

          <div className="navbar-text me-3">
            <i className="bi bi-people-fill text-white"></i> {followersCount}{" "}
            Followers
          </div>

          <div className="dropdown">
            <button
              className="btn btn-link dropdown-toggle"
              type="button"
              id="notificationDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi bi-bell-fill text-white"></i> Notifications
            </button>
            <ul
              className="dropdown-menu"
              aria-labelledby="notificationDropdown"
            >
              {filteredNotifications.length > 0 ? (
                filteredNotifications.map((notification) => (
                  <li
                    className="dropdown-item"
                    key={notification.id}
                    onClick={() => handleNotificationClick(notification)}
                  >
                    {notification.message}
                  </li>
                ))
              ) : (
                <li className="dropdown-item">No matching notifications.</li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {selectedNotification && (
        <div className="notification-details-container mt-4">
          <h3>Notification Details</h3>
          <div>
            <p>Message: {selectedNotification.message}</p>
            <p>Data: {selectedNotification.data}</p>
          </div>
          <button className="btn btn-primary" onClick={handleBackButtonClick}>
            Back
          </button>
        </div>
      )}

      <div className="content">{}</div>
    </div>
  );
};

export default EventProf;
