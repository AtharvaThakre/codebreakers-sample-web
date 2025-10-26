const HelpingBusiness = () => {
  const stats = [
    { id: 1, icon: '/assets/images/icons/user_icon.png', number: '2,245,341', label: 'Members' },
    { id: 2, icon: '/assets/images/icons/clubs_icon.png', number: '46,328', label: 'Clubs' },
    { id: 3, icon: '/assets/images/icons/event_icon.svg', number: '828,867', label: 'Event Bookings' },
    { id: 4, icon: '/assets/images/icons/payment_icon.svg', number: '1,926,436', label: 'Payments' },
  ];

  return (
    <section className="helping_business bg-bluegraylight">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="left-panel">
          <h2 className="text-36">
            Helping a local <span>business reinvent itself</span>
          </h2>
          <p>We reached here with our hard work and dedication</p>
        </div>
        <div className="right-panel">
          <ul className="list-unstyled m-right-30">
            {stats.map((stat) => (
              <li key={stat.id}>
                <img src={stat.icon} alt={`${stat.label} icon`} />
                <p>
                  {stat.number} <span>{stat.label}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HelpingBusiness;
