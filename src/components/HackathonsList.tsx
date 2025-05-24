import React from 'react';

interface Hackathon {
  id: number;
  name: string;
  date: string;
  location: string;
  description: string;
  link: string;
  image: string;
  registrationStatus: 'Open' | 'Closed';
}

const hackathons: Hackathon[] = [
  {
    id: 1,
    name: "CodeFest 2023",
    date: "October 15-17, 2023",
    location: "San Francisco, CA",
    description: "A three-day hackathon focused on innovative software solutions.",
    link: "https://example.com/codefest",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    registrationStatus: 'Closed',
  },
  {
    id: 2,
    name: "Hack the Future",
    date: "November 5-7, 2023",
    location: "New York, NY",
    description: "Join us for a weekend of coding and collaboration.",
    link: "https://example.com/hackthefuture",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    registrationStatus: 'Open',
  },
  {
    id: 3,
    name: "DevJam 2024",
    date: "January 20-22, 2024",
    location: "Austin, TX",
    description: "Collaborate with top developers and win exciting prizes!",
    link: "https://example.com/devjam",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    registrationStatus: 'Open',
  },
  {
    id: 4,
    name: "InnovateX Hackathon",
    date: "March 10-12, 2024",
    location: "Seattle, WA",
    description: "Innovate and build solutions for real-world problems.",
    link: "https://example.com/innovatex",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    registrationStatus: 'Closed',
  },
  {
    id: 5,
    name: "AI Builders Summit",
    date: "April 18-20, 2024",
    location: "Boston, MA",
    description: "A hackathon dedicated to AI and machine learning projects.",
    link: "https://example.com/aibuilders",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    registrationStatus: 'Open',
  },
];

const HackathonsList: React.FC = () => {
  return (
    <div className="hackathons-container bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen text-gray-900 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">Upcoming Hackathons</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {hackathons.map((hackathon) => (
          <div key={hackathon.id} className="hackathon-card bg-gradient-to-br from-gray-800 to-gray-900 p-0 rounded-lg shadow-md overflow-hidden flex flex-col">
            <img src={hackathon.image} alt={hackathon.name} className="w-full h-40 object-cover" />
            <div className="p-4 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-white">{hackathon.name}</h3>
                <span className={`px-2 py-1 text-xs rounded font-bold ${hackathon.registrationStatus === 'Open' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>{hackathon.registrationStatus}</span>
              </div>
              <p className="text-gray-400">{hackathon.date}</p>
              <p className="text-gray-400">{hackathon.location}</p>
              <p className="text-gray-300 mt-2 flex-1">{hackathon.description}</p>
              <a href={hackathon.link} className="text-blue-400 hover:underline mt-2 inline-block" target="_blank" rel="noopener noreferrer">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HackathonsList; 