// pages/contribute.js
"use client";
import { Card, CardContent } from "@/components/ui/card";

export default function ContributePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-8">Contribute to BitOGit</h2>
      <p className="text-center mb-12 text-xl">
        Help us improve BitOGitby contributing your expertise, ideas, and skills!
      </p>

      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-4">How to Get Started</h3>
        <Card>
          <CardContent>
            <ol className="list-decimal list-inside">
              <li>Fork the repository on GitHub.</li>
              <li>Clone your fork locally and create a new branch.</li>
              <li>Make your changes and test them locally.</li>
              <li>Commit and push your changes to your forked repository.</li>
              <li>Submit a pull request with a detailed description of your changes.</li>
            </ol>
          </CardContent>
        </Card>
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-4">Looking for Ideas?</h3>
        <p>Check out the open issues on our GitHub page, or pick one of these contribution ideas:</p>
        <ul className="list-disc list-inside mt-4">
          <li>Enhance documentation and learning resources.</li>
          <li>Improve the UI and user experience.</li>
          <li>Suggest new features or topics to cover.</li>
        </ul>
      </section>
    </div>
  );
}