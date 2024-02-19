import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  // Get the userId from the URL params
  const { userId } = useParams();

  // You can fetch the user profile data based on the userId
  // Replace this with your actual API call or data retrieval method
  const userProfile = {
    id: userId,
    name: "John Doe",
    bio: "The customer is very important, the customer will be followed by the customer.",

    eventCount: 5,
    candidateCount: 10,
  };

  return (
    <div>
      <div className="">
        <nav className=" container  navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand me-4" href="#">
              <img
                src='./img/vote2.png'
                alt="Profile"
                className="rounded-circle"
                style={{ width: "auto", height: "40px" }}
              />
              <span className="ms-2 text-light">{userProfile.name}</span>
            </a>
            <div className="navbar-nav ms-auto">
              <a className="nav-link" href="#">
                Followers: {userProfile.followers}
              </a>
              <a className="nav-link" href="#">
                Events Created: {userProfile.eventCount}
              </a>
              <a className="nav-link" href="#">
                Candidates Supported: {userProfile.candidateCount}
              </a>
            </div>
          </div>
        </nav>
      </div>

      <div className="container">
        <div className="row justify-content-center mt-5 mb-5">
          <div className="col-12">
            <div className="">
              <div className="card-body text-center">
                <h2 className="card-title text-uppercase text-primary fw-bold mb-3">
                  Dashboard
                </h2>
                <p className="card-text text-muted fs-5">{userProfile.bio}</p>
                <div className="row mt-4">
                  <div className="col-md-6">
                    <div className="card bg-danger text-white shadow">
                      <div className="card-body">
                        <h5 className="card-title">Events Created</h5>
                        <p className="card-text fs-5 fw-bold mb-0">
                          {userProfile.eventCount}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card bg-warning text-white shadow">
                      <div className="card-body">
                        <h5 className="card-title">Candidates Supported</h5>
                        <p className="card-text fs-5 fw-bold mb-0">
                          {userProfile.candidateCount}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="mt-4">Latest Event</h4>
                <div className="card mt-3">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <h5 className="card-title text-primary fw-bold mb-3">
                          Event Title
                        </h5>
                        <p className="card-text mb-4">
                          Join us for a charity gala at the Fairmont Hotel.
                          Dress your best and enjoy a glamorous evening filled
                          with live music, exquisite cuisine, and captivating
                          performances. Help us make a difference while
                          indulging in an unforgettable experience.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <div className="event-details">
                          <p className="mb-2 text-info">
                            <strong>Location:</strong> London
                          </p>
                          <p className="mb-2 text-success">
                            <strong>Date:</strong> 19-01-1950
                          </p>
                          <p className="mb-2">
                            <strong>Voting Instructions:</strong> Visit the
                            designated voting area at the venue. Locate the
                            voting booths and choose your preferred
                            organization. Fill out the voting form with your
                            name and select your chosen charity. Drop your
                            completed ballot in the designated ballot box. Only
                            one vote per person is allowed. Voting will be open
                            from [start time] to [end time]. The organization
                            with the highest number of votes will receive the
                            People's Choice Award.
                          </p>
                          <p className="mb-0 text-muted">
                            <strong>Status:</strong> Event open
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card mt-3">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <h5 className="card-title text-primary fw-bold mb-3">
                          Event Title
                        </h5>
                        <p className="card-text mb-4">
                          Join us for a charity gala at the Fairmont Hotel.
                          Dress your best and enjoy a glamorous evening filled
                          with live music, exquisite cuisine, and captivating
                          performances. Help us make a difference while
                          indulging in an unforgettable experience.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <div className="event-details">
                          <p className="mb-2 text-info">
                            <strong>Location:</strong> London
                          </p>
                          <p className="mb-2 text-success">
                            <strong>Date:</strong> 19-01-1950
                          </p>
                          <p className="mb-2">
                            <strong>Voting Instructions:</strong> Visit the
                            designated voting area at the venue. Locate the
                            voting booths and choose your preferred
                            organization. Fill out the voting form with your
                            name and select your chosen charity. Drop your
                            completed ballot in the designated ballot box. Only
                            one vote per person is allowed. Voting will be open
                            from [start time] to [end time]. The organization
                            with the highest number of votes will receive the
                            People's Choice Award.
                          </p>
                          <p className="mb-0 text-muted">
                            <strong>Status:</strong> Event open
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mt-3">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <h5 className="card-title text-primary fw-bold mb-3">
                          Event Title
                        </h5>
                        <p className="card-text mb-4">
                          Join us for a charity gala at the Fairmont Hotel.
                          Dress your best and enjoy a glamorous evening filled
                          with live music, exquisite cuisine, and captivating
                          performances. Help us make a difference while
                          indulging in an unforgettable experience.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <div className="event-details">
                          <p className="mb-2 text-info">
                            <strong>Location:</strong> London
                          </p>
                          <p className="mb-2 text-success">
                            <strong>Date:</strong> 19-01-1950
                          </p>
                          <p className="mb-2">
                            <strong>Voting Instructions:</strong> Visit the
                            designated voting area at the venue. Locate the
                            voting booths and choose your preferred
                            organization. Fill out the voting form with your
                            name and select your chosen charity. Drop your
                            completed ballot in the designated ballot box. Only
                            one vote per person is allowed. Voting will be open
                            from [start time] to [end time]. The organization
                            with the highest number of votes will receive the
                            People's Choice Award.
                          </p>
                          <p className="mb-0 text-muted">
                            <strong>Status:</strong> Event open
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mt-3">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <h5 className="card-title text-primary fw-bold mb-3">
                          Event Title
                        </h5>
                        <p className="card-text mb-4">
                          Join us for a charity gala at the Fairmont Hotel.
                          Dress your best and enjoy a glamorous evening filled
                          with live music, exquisite cuisine, and captivating
                          performances. Help us make a difference while
                          indulging in an unforgettable experience.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <div className="event-details">
                          <p className="mb-2 text-info">
                            <strong>Location:</strong> London
                          </p>
                          <p className="mb-2 text-success">
                            <strong>Date:</strong> 19-01-1950
                          </p>
                          <p className="mb-2">
                            <strong>Voting Instructions:</strong> Visit the
                            designated voting area at the venue. Locate the
                            voting booths and choose your preferred
                            organization. Fill out the voting form with your
                            name and select your chosen charity. Drop your
                            completed ballot in the designated ballot box. Only
                            one vote per person is allowed. Voting will be open
                            from [start time] to [end time]. The organization
                            with the highest number of votes will receive the
                            People's Choice Award.
                          </p>
                          <p className="mb-0 text-muted">
                            <strong>Status:</strong> Event open
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-end mt-4">
                  <a href="#" className="btn btn-primary">
                    View All Events
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
