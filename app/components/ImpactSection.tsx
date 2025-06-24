import Image from "next/image";

export const ImpactSection = () => {
  const stats = [
    {
      number: "2.5M+",
      label: "Streams Generated",
      description: "Total plays for featured artists",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      number: "500K+",
      label: "Playlist Additions",
      description: "Songs added to user playlists",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
        </svg>
      ),
    },
    {
      number: "50+",
      label: "Countries Reached",
      description: "Global artist representation",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      number: "1.2M+",
      label: "New Followers",
      description: "Social media growth for artists",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
        </svg>
      ),
    },
    {
      number: "25+",
      label: "Media Features",
      description: "Publications covering our artists",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
            clipRule="evenodd"
          />
          <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
        </svg>
      ),
    },
    {
      number: "3.5 Years",
      label: "Platform Growth",
      description: "Supporting artists since 2021",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative bg-black text-white py-24">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=3160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className=" p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center group"
            >
              <div className="text-white/70 group-hover:text-white transition-colors mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-light mb-3 text-white">
                {stat.number}
              </div>
              <h3 className="text-xl font-medium mb-2 text-gray-200">
                {stat.label}
              </h3>
              <p className="text-gray-400 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="  p-12 border border-white/10 text-center">
          <blockquote className="text-xl md:text-2xl font-light text-gray-300 mb-6 leading-relaxed">
            &quot;Musicly has completely transformed how I discover music.
            I&apos;ve found over 50 incredible artists I never would have
            encountered otherwise. My playlists went from mainstream to deeply
            personal.&quot;
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <Image
              src="https://images.unsplash.com/photo-1552035264-b9ad6e681ca7?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Artist"
              width={48}
              height={48}
              className="w-12 h-12 rounded-full border-2 border-white/20"
            />
            <div className="text-left">
              <div className="text-white font-medium">Zara Okafor</div>
              <div className="text-gray-400 text-sm">December 2024</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
