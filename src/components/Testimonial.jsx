const Testimonial = () => {
  const clients = [
    { id: 1, src: '/assets/images/our_client1.png', alt: 'our clients 1' },
    { id: 2, src: '/assets/images/our_client2.png', alt: 'our clients 2' },
    { id: 3, src: '/assets/images/our_client3.png', alt: 'our clients 3' },
    { id: 4, src: '/assets/images/our_client4.png', alt: 'our clients 4' },
    { id: 5, src: '/assets/images/our_client5.png', alt: 'our clients 5' },
    { id: 6, src: '/assets/images/our_client6.png', alt: 'our clients 6' },
  ];

  return (
    <section className="testimonial">
      <div className="container d-flex align-items-center justify-content-between">
        <img src="/assets/images/testimonials.png" alt="testimonial-icon" />

        <div className="right-panel">
          <blockquote className="text-14 m-button-16">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus
            tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in,
            gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie,
            nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla
            sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque
            malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget
            efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </blockquote>
          <p className="text-20 color-accent">Tim Smith</p>
          <p>British Dragon Boat Racing Association</p>
          <ul className="list-unstyled d-flex justify-content-between align-items-center">
            {clients.map((client) => (
              <li key={client.id}>
                <img src={client.src} alt={client.alt} />
              </li>
            ))}
            <a className="btn" href="#">
              Meet all Customer 
              <img src="/assets/images/icons/right_aero.png" alt="right_aero_icon" />
            </a>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
