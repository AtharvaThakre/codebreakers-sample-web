const Marketing = () => {
  const cards = [
    {
      id: 1,
      image: '/assets/images/creating_woman.png',
      title: 'Creating Streamlined Safeguarding Processes with OneRen',
    },
    {
      id: 2,
      image: '/assets/images/responsbility_laptop.png',
      title: 'What are your safeguarding responsibilities and how can you manage them?',
    },
    {
      id: 3,
      image: '/assets/images/responsbility_laptop.png',
      title: 'Revamping the Membership Model with Triathlon Australia',
    },
  ];

  return (
    <section className="marketing text-center">
      <div className="container">
        <div className="top-panel">
          <h2 className="text-28">Caring is the new marketing</h2>
          <p className="text-center">
            The Nextcent blog is the best place to read about the latest membership
            insights, trends and more. See who's joining the community, read about how our community are increasing their
            membership income and lot's more.
          </p>
        </div>
        <div className="card-wrapper d-flex">
          {cards.map((card) => (
            <div key={card.id} className="card">
              <img src={card.image} alt={card.title} />
              <div className="text-content">
                <p>{card.title}</p>
                <a href="#">
                  Readmore
                  <img src="/assets/images/icons/right_green_aero.svg" alt="right_aero_icon" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marketing;
