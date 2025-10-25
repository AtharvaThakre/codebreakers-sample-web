import React from 'react';

const OurClients: React.FC = () => {
  const clients = [
    { id: 1, src: '/assets/images/our_client1.png', alt: 'our clients 1' },
    { id: 2, src: '/assets/images/our_client2.png', alt: 'our clients 2' },
    { id: 3, src: '/assets/images/our_client3.png', alt: 'our clients 3' },
    { id: 4, src: '/assets/images/our_client4.png', alt: 'our clients 4' },
    { id: 5, src: '/assets/images/our_client5.png', alt: 'our clients 5' },
    { id: 6, src: '/assets/images/our_client6.png', alt: 'our clients 6' },
    { id: 7, src: '/assets/images/our_client7.png', alt: 'our clients 7' },
  ];

  return (
    <section className="our-clients">
      <div className="container">
        <div className="section-title-wrapper text-center">
          <h2 className="text-36">Our Clients</h2>
          <p>We have been working with some Fortune 500+ clients</p>
        </div>
        <ul className="list-unstyled d-flex justify-content-between align-items-center">
          {clients.map((client) => (
            <li key={client.id}>
              <img src={client.src} alt={client.alt} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OurClients;
