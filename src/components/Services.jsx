const Services = () => (
  <section className="py-16 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {[
          { name: 'Flight Tickets', description: 'Book domestic and international flights with ease.' , src :'https://www.shutterstock.com/shutterstock/photos/2278553741/display_1500/stock-vector-airplane-ticket-flight-boarding-pass-design-air-plane-airline-card-template-fly-travel-2278553741.jpg' },
          { name: 'Tour Packages', description: 'Explore amazing destinations with our curated packages.' },
          { name: 'Visa Service Assistance', description: 'Get help with visa applications and documentation.' },
        ].map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
            <img src={service.src} alt={service.name} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
