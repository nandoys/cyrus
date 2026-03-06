const properties = [
  {
    id: 1,
    price: "$1,250,000",
    title: "Modern Luxury Villa",
    location: "Beverly Hills, CA",
    beds: 5,
    baths: 4,
    sqft: "4,200",
    tag: "For Sale",
    gradient: "from-blue-900/80 to-indigo-900/80",
    accentColor: "bg-blue-500",
    patternColor: "bg-blue-700/30",
  },
  {
    id: 2,
    price: "$875,000",
    title: "Downtown Penthouse",
    location: "Manhattan, NY",
    beds: 3,
    baths: 3,
    sqft: "2,800",
    tag: "New Listing",
    gradient: "from-slate-900/80 to-blue-900/80",
    accentColor: "bg-emerald-500",
    patternColor: "bg-slate-700/30",
  },
  {
    id: 3,
    price: "$3,200/mo",
    title: "Waterfront Condo",
    location: "Miami Beach, FL",
    beds: 2,
    baths: 2,
    sqft: "1,650",
    tag: "For Rent",
    gradient: "from-cyan-900/80 to-blue-900/80",
    accentColor: "bg-orange-500",
    patternColor: "bg-cyan-700/30",
  },
];

function PropertyCard({
  property,
}: {
  property: (typeof properties)[number];
}) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
      {/* Image placeholder */}
      <div className="relative h-56 overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${property.gradient}`}
        />
        {/* Decorative pattern */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`w-32 h-32 rounded-full ${property.patternColor} blur-2xl`}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="w-20 h-20 text-white/20"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        </div>
        {/* Tag */}
        <div className="absolute top-4 left-4">
          <span
            className={`${property.accentColor} text-white text-xs font-bold px-3 py-1.5 rounded-full`}
          >
            {property.tag}
          </span>
        </div>
        {/* Price overlay */}
        <div className="absolute bottom-4 right-4">
          <span className="bg-white/95 text-[#1e3a5f] font-extrabold text-lg px-4 py-1.5 rounded-xl shadow">
            {property.price}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
          {property.title}
        </h3>
        <p className="text-gray-500 flex items-center gap-1.5 mb-4 text-sm">
          <svg
            className="w-4 h-4 text-blue-500 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          {property.location}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-sm text-gray-600">
          <span className="flex items-center gap-1.5">
            <svg
              className="w-4 h-4 text-blue-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z" />
            </svg>
            <span className="font-semibold text-gray-800">{property.beds}</span>{" "}
            Beds
          </span>
          <span className="flex items-center gap-1.5">
            <svg
              className="w-4 h-4 text-blue-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7 6c0-.55-.45-1-1-1s-1 .45-1 1v13H3v2h18v-2h-2V8c0-1.1-.9-2-2-2H7V6zm6 0v2h4V6h-4z" />
            </svg>
            <span className="font-semibold text-gray-800">{property.baths}</span>{" "}
            Baths
          </span>
          <span className="flex items-center gap-1.5">
            <svg
              className="w-4 h-4 text-blue-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
            <span className="font-semibold text-gray-800">{property.sqft}</span>{" "}
            sqft
          </span>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedProperties() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
            Handpicked for You
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1e3a5f] mt-3 mb-4">
            Featured Properties
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Explore our curated selection of premium properties across the
            country&apos;s most sought-after locations.
          </p>
        </div>

        {/* Property cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-[#1e3a5f] hover:bg-[#2563eb] text-white font-semibold px-10 py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
}
