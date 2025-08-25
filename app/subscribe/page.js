"use client";
import { useState } from "react";

export default function SubscribePage() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    setSubscribed(true);
    // Later you can integrate Stripe/PayPal here
  };

  return (
    <div className="p-8 max-w-3xl mx-auto text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6">Subscribe to HelpHub247</h1>
      <p className="mb-6">
        Unlock premium AI features, unlimited chat history, file uploads, and
        advanced support with a subscription.
      </p>

      {!subscribed ? (
        <button
          onClick={handleSubscribe}
          className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          Subscribe Now (Demo)
        </button>
      ) : (
        <p className="text-green-600 font-semibold">
          ✅ You are now subscribed (Demo Mode).
        </p>
      )}

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Subscription Benefits:</h2>
        <ul className="list-disc list-inside">
          <li>Unlimited chat history & saved conversations</li>
          <li>Upload files and images</li>
          <li>Priority AI responses</li>
          <li>Early access to new features</li>
        </ul>
      </div>
    </div>
  );
}
