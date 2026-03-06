const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "First-Time Homebuyer",
    rating: 5,
    text: "Cyrus Real Estate made my dream of homeownership a reality. Their team was incredibly patient, knowledgeable, and always available to answer my questions. I found my perfect home in just three weeks!",
    initials: "SM",
    color: "bg-blue-500",
  },
  {
    id: 2,
    name: "James & Linda Thornton",
    role: "Home Sellers",
    rating: 5,
    text: "We were amazed by how quickly our home sold — above asking price! The marketing strategy and professional photography made all the difference. Cyrus Real Estate delivered beyond our expectations.",
    initials: "JT",
    color: "bg-[#1e3a5f]",
  },
  {
    id: 3,
    name: "Carlos Reyes",
    role: "Property Investor",
    rating: 5,
    text: "As an investor, I need an agent who understands the numbers. The team at Cyrus Real Estate provided exceptional market insights that helped me build a profitable portfolio. Highly recommended!",
    initials: "CR",
    color: "bg-cyan-600",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0f2340] to-[#1e3a5f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-blue-300 font-semibold text-sm uppercase tracking-widest">
            Client Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-blue-200 max-w-xl mx-auto text-lg">
            Don&apos;t just take our word for it. Here&apos;s what our
            satisfied clients have to say about their experience.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
            >
              {/* Quote icon */}
              <svg
                className="w-10 h-10 text-blue-400/40 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>

              <StarRating count={t.rating} />

              <p className="text-blue-100 mt-4 mb-6 leading-relaxed text-sm">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div
                  className={`w-11 h-11 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-blue-300 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { value: "98%", label: "Client Satisfaction" },
            { value: "4.9★", label: "Average Rating" },
            { value: "500+", label: "5-Star Reviews" },
            { value: "10+", label: "Years Experience" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/5 rounded-xl py-5 px-4 border border-white/10">
              <p className="text-2xl font-extrabold text-white">{stat.value}</p>
              <p className="text-blue-300 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
