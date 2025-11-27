import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section class="w-full flex justify-center mb-20">
      <div class="bg-white w-full max-w-3xl p-10 rounded-2xl shadow-lg">
        <h2 class="text-3xl font-bold text-gray-800 mb-4 text-center">
          Join Our Newsletter
        </h2>

        <p class="text-gray-600 text-center mb-8">
          Subscribe to get updates on new courses, exclusive discounts, and
          weekly learning tips.
        </p>

        <form class="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            class="flex-1 border border-gray-300 p-3 pl-5 rounded-4xl focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <button class=" btn btn-primary hover:btn-secondary text-white px-6 py-6 rounded-4xl font-semibold transition">
            Subscribe
          </button>
        </form>

        <p class="text-gray-500 text-sm mt-4 text-center">
          We respect your privacy. No spam—ever.
        </p>
      </div>
    </section>
  );
}
