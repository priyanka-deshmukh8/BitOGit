import { Button } from "@/components/ui/button";
import { SiDiscord } from "react-icons/si";

export default function CommunityPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-8">Join the Git Learn Community</h2>
      <p className="text-center mb-6 text-xl">
        Connect with fellow learners, ask questions, and collaborate on open-source projects. Our Discord community is open to everyone interested in mastering Git and contributing to Git Learn.
      </p>
      <p className="text-center mb-12">
        Whether you&apos;re a beginner or an experienced developer, we welcome you to join our community and help each other grow!
      </p>

      <div className="flex justify-center">
        <a href="https://discord.gg/YOUR_DISCORD_INVITE_LINK" target="_blank" rel="noopener noreferrer">
          <Button className="bg-blue-600 text-white flex items-center space-x-2 hover:bg-blue-700">
            <SiDiscord className="mr-2" />
            <span>Join Our Discord Community</span>
          </Button>
        </a>
      </div>

      <section className="mt-12">
        <h3 className="text-2xl font-bold text-blue-800 mb-4">Community Guidelines</h3>
        <ul className="list-disc list-inside text-lg">
          <li>Be respectful and inclusive to all members.</li>
          <li>Use appropriate channels for different topics.</li>
          <li>Avoid spamming or self-promotion.</li>
          <li>Encourage constructive feedback and collaboration.</li>
          <li>Follow the server rules and Discord&apos;s Community Guidelines.</li>
        </ul>
      </section>
    </div>
  );
}