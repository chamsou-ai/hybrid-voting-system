import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function FillExample() {
  return (
    <div className="container">
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3 bg-dark"
      fill
    >
      <Tab eventKey="home" title="Home" className=''>
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="longer-tab" title="Loooonger Tab">
        Tab content for Loooonger Tab
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact
      </Tab>
    </Tabs>
    </div>
  );
}

export default FillExample;