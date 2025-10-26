const ManageCommunity = () => {
  const cards = [
    {
      id: 1,
      image: '/assets/images/manage_community1.png',
      title: 'Membership Organisations',
      description: 'Our membership management software provides full automation of membership renewals and payments',
    },
    {
      id: 2,
      image: '/assets/images/manage_community2.png',
      title: 'National Associations',
      description: 'Our membership management software provides full automation of membership renewals and payments',
    },
    {
      id: 3,
      image: '/assets/images/manage_community3.png',
      title: 'Clubs And Groups',
      description: 'Our membership management software provides full automation of membership renewals and payments',
    },
  ];

  return (
    <section className="manage_community">
      <div className="container">
        <div className="top-panel text-center">
          <h2 className="text-36">Manage your entire community in a single system</h2>
          <p>Who is Nextcent suitable for?</p>
        </div>
        <div className="community-button-panel">
          {cards.map((card) => (
            <div key={card.id} className="card">
              <img src={card.image} alt={`${card.title} icon`} />
              <h3 className="text-28">{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManageCommunity;
