import Image from "next/image";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-16 bg-slate-50 mb-20">
      <div className="max-w-6xl mx-auto px-6">
        <header className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900">
            What Our Students Say
          </h2>
          <p className="text-slate-600 mt-2">
            Real feedback from students around the world.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 flex flex-col h-full">
            <p className="text-slate-700 text-sm leading-relaxed mb-6  grow">
              “This course transformed my career. I now feel confident building
              real applications!”
            </p>
            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-200">
              <div className="relative w-12 h-12">
                <Image
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Sophia Carter"
                  fill
                  className="rounded-full object-cover"
                  unoptimized
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-slate-900">
                  Sophia Carter
                </span>
                <span className="text-xs text-slate-500">
                  Frontend Dev, Meta
                </span>
                <div className="flex items-center gap-0.5 mt-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                </div>
                <span className="text-xs text-slate-400 mt-1">
                  Dec 10, 2024
                </span>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 flex flex-col h-full">
            <p className="text-slate-700 text-sm leading-relaxed mb-6  grow">
              “Clear explanations, practical projects, and a supportive
              community. Highly recommended.”
            </p>
            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-200">
              <div className="relative w-12 h-12">
                <Image
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Daniel Kim"
                  fill
                  className="rounded-full object-cover"
                  unoptimized
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-slate-900">Daniel Kim</span>
                <span className="text-xs text-slate-500">
                  Software Engineer, Amazon
                </span>
                <div className="flex items-center gap-0.5 mt-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                </div>
                <span className="text-xs text-slate-400 mt-1">
                  Oct 22, 2024
                </span>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 flex flex-col h-full">
            <p className="text-slate-700 text-sm leading-relaxed mb-6  grow">
              “I landed my first internship thanks to this. The content is
              top-tier and easy to follow.”
            </p>
            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-200">
              <div className="relative w-12 h-12">
                <Image
                  src="https://randomuser.me/api/portraits/women/65.jpg"
                  alt="Emma Rodriguez"
                  fill
                  className="rounded-full object-cover"
                  unoptimized
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-slate-900">
                  Emma Rodriguez
                </span>
                <span className="text-xs text-slate-500">CS Student</span>
                <div className="flex items-center gap-0.5 mt-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <Star className="w-4 h-4 text-slate-300" />
                </div>
                <span className="text-xs text-slate-400 mt-1">Jan 3, 2025</span>
              </div>
            </div>
          </div>

          {/* Testimonial 4 */}
          <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 flex flex-col h-full">
            <p className="text-slate-700 text-sm leading-relaxed mb-6  grow">
              “The best online learning experience I&apos;ve ever had. Modern,
              clean and extremely useful.”
            </p>
            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-200">
              <div className="relative w-12 h-12">
                <Image
                  src="https://randomuser.me/api/portraits/men/51.jpg"
                  alt="Michael Lee"
                  fill
                  className="rounded-full object-cover"
                  unoptimized
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-slate-900">
                  Michael Lee
                </span>
                <span className="text-xs text-slate-500">
                  Full-Stack Developer
                </span>
                <div className="flex items-center gap-0.5 mt-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                </div>
                <span className="text-xs text-slate-400 mt-1">
                  Nov 18, 2024
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
