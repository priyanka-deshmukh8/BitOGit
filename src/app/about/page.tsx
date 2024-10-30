// pages/about.js
"use client";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-8">About BitOGit</h2>
      <section className="mb-12">
        <p className="text-lg">
          BitOGit is an open-source initiative dedicated to making version control accessible to everyone. We believe that understanding Git is essential for modern development, and our mission is to provide high-quality learning resources to make this happen.
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
        <p>To empower developers with practical Git knowledge and encourage collaboration in open-source development.</p>
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-4">The Team</h3>
        <p>This project is maintained by passionate open-source contributors from all over the world. Join us on GitHub to become a part of our community!</p>
      </section>
    </div>
  );
}