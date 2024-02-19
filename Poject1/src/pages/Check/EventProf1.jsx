import React, { useState } from "react";


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
    <div className="bg-dark">
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        id=""
        style={{ transition: "1s" }}
      >
        <div class="container px-5">
          <a class="navbar-brand" href="#">
            <img src="./vote.png" alt="Bootstrap" width="100" />
          </a>{" "}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">
                  About
                </a>
              </li>
            </ul>
            <form class="d-flex m-2" action="/home">
              <a
                href="#Sign"
                class="btn btn-light me-4 d-inline-block"
                type="submit"
              >
                SIGN UP
              </a>
              <a class="btn btn-outline-light " href="login">
                LOGIN
              </a>
            </form>
          </div>
          <div className="dropdown">
            <button
              className="btn btn-outline-light dropdown-toggle"
              type="button"
              id="notificationDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi bi-bell-fill text-white"></i> Notifications
            </button>
            <ul className="dropdown-menu" aria-labelledby="notificationDropdown">
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
    </div>
  );
};

export default EventProf;
