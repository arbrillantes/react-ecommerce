const About = () => {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img 
            src="/src/assets/images/about.jpg" 
            className="img-fluid rounded shadow" 
            alt="About Us" 
          />
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold">About Our Store</h2>
          <p className="text-muted mt-3">
            Welcome to E-Shop, your number one source for all things tech. 
            We're dedicated to giving you the very best of gadgets, with a 
            focus on quality, price, and customer service.
          </p>
          <p className="text-muted">
            Founded in 2026, E-Shop has come a long way from its beginnings. 
            When we first started out, our passion for affordable technology 
            drove us to quit our day jobs so that E-Shop can offer you the 
            world's most advanced devices.
          </p>
          <button className="btn btn-primary px-4 py-2">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;