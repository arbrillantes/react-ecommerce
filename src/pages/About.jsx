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
          <h2 className="fw-bold">About Level Up Gear</h2>
          <p className="text-muted mt-3">
            Welcome to Level Up Gear, your number one source for pro-grade gaming peripherals and accessories. 
            We're dedicated to giving you the very best in gaming hardware, with a 
            focus on performance, durability, and competitive pricing.
          </p>
          <p className="text-muted">
            Founded in 2026, Level Up Gear has come a long way from its beginnings. 
            When we first started out, our passion for esports and gaming culture 
            drove us to build a store that offers every player the tools they need to dominate the leaderboard.
          </p>
          <button className="btn btn-primary px-4 py-2">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default About;