const services = [
  {
    title: "Buy a Home",
    description:
      "Navigate the home-buying journey with confidence. Our expert agents guide you through every step, from finding the perfect property to closing the deal.",
    features: ["Personalized property search", "Market analysis", "Negotiation expertise", "Closing support"],
    color: "from-blue-500 to-blue-700",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    ),
  },
  {
    title: "Sell Your Home",
    description:
      "Maximize your property's value with our proven marketing strategies. We attract qualified buyers and ensure you get the best price for your home.",
    features: ["Professional photography", "MLS listing", "Open house coordination", "Offer management"],
    color: "from-[#1e3a5f] to-blue-900",
    bgColor: "bg-slate-50",
    borderColor: "border-slate-100",
    iconBg: "bg-slate-100",
    iconColor: "text-[#1e3a5f]",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    ),
  },
  {
    title: "Rent a Property",
    description:
      "Find the perfect rental that fits your budget and lifestyle. We offer a wide selection of apartments, houses, and condos in prime locations.",
    features: ["Flexible lease terms", "Tenant screening", "Maintenance support", "Virtual tours"],
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-100",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25S13.24 11.25 12 11.25 9.75 10.24 9.75 9 10.76 6.75 12 6.75zM17 17H7v-.75c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1e3a5f] mt-3 mb-4">
            Our Services
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Whether you&apos;re buying, selling, or renting, we provide
            comprehensive real estate services to meet your needs.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative ${service.bgColor} border ${service.borderColor} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
            >
              {/* Background accent */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-5 rounded-full -translate-y-8 translate-x-8`}
              />

              <div
                className={`inline-flex items-center justify-center w-16 h-16 ${service.iconBg} ${service.iconColor} rounded-2xl mb-6`}
              >
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-500 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-gray-600 text-sm">
                    <svg
                      className="w-4 h-4 text-blue-500 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full bg-gradient-to-r ${service.color} text-white font-semibold py-3 rounded-xl opacity-90 group-hover:opacity-100 transition-all duration-200 shadow hover:shadow-md`}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
