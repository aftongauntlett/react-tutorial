/**
 * Home.tsx
 *
 * The main landing page for the Developer Galaxy site.
 * Presents a grid of interactive coding problems that teach core concepts
 * through visual and story-driven scenes. Each card links to a unique learning experience.
 */

import { Link } from 'react-router-dom';
import {
  PiInfinityThin,
  PiBugThin,
  PiGitBranchLight,
  PiGearThin,
  PiCrownThin,
} from 'react-icons/pi';
import type { IconType } from 'react-icons';

/**
 * HomePage component – displays an overview of all available coding challenges.
 */
export default function HomePage() {
  /**
   * Array of coding problem card metadata.
   * Each item contains a route, title, description, and icon.
   */
  const cardData: {
    to: string;
    title: string;
    description: string;
    Icon: IconType;
  }[] = [
    {
      to: '/room-427',
      title: 'Stanley Parable',
      description:
        'This scenario explores control flow and decision trees. The wrong branch might cost you the job. Or worse...force you to start over. Again.',
      Icon: PiInfinityThin,
    },
    {
      to: '/aperture-science',
      title: 'GLaDOS',
      description:
        'Recursion, function composition, and escape from inevitable death loops. GLaDOS has generously decided to let you solve this yourself. Probably.',
      Icon: PiGitBranchLight,
    },
    {
      to: '/space',
      title: 'Wheatley',
      description:
        'Unstable state. Mismanaged memory. Intermittent resets. You’ll need to wrangle state across systems with, well…Wheatley "helping".',
      Icon: PiBugThin,
    },
    {
      to: '/black-mesa',
      title: 'G-Man',
      description:
        'Welcome to abstraction, composition, and layered systems. This isn’t just a design pattern. It’s a structure. An arrangement. An offer.',
      Icon: PiGearThin,
    },
    {
      to: '/final-boss',
      title: 'Final Boss',
      description: 'An unknown force tests everything you’ve learned. The rules: [undefined].',
      Icon: PiCrownThin,
    },
  ];

  return (
    <section className="w-full min-h-screen bg-[var(--color-background)] text-[var(--color-text)] px-6 font-roboto overflow-x-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Page Header */}
        <header>
          <h1 className="text-5xl font-bold font-montserrat tracking-tight text-[var(--color-primary)]">
            And now for something completely different...
          </h1>
        </header>
        <div className="border-l-2 border-[var(--color-primary)] px-5 my-12 max-w-4xl">
          <p className="text-lg text-[var(--color-muted)] leading-relaxed font-light mb-4">
            Welcome to this "tutorial" of sorts. Here we will explore those silly questions thrown
            at us during those dreadful "technical interviews"...you know, the ones about Sally
            buying 28 pineapples, why the train going 80mph matters, why the spaceship needs to know
            the 10 closest gas stations, not planets...or maybe it's the 8 slices of pizza that
            needs to be divided fairly amongst a party of 12, or maybe...maybe, its just maybeline?
          </p>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed font-light mb-4">
            Do these questions throw you off? Not because you aren't smart, but because you are so
            focused on the absolute ridiculousness of the stupid stories you can't concentrate on
            the actual math and code? The important stuff. And by the time you get around to
            thinking about it - you realize you have been quiet for wayyyy too long.
          </p>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed font-light mb-4">
            You see, people like me, maybe you, we like the story - we live for the story...we don't
            like math. Honestly, we aren't even sure how we got here. We are bad at logic. We like
            art, design, music, bringing order to chaos (some of us). I love organization, I fell in
            love with coding because I really like setting up projects and organizing my folders and
            files, it brings me peace! Unforunately, I never finish anything...I set it up, and move
            on to my next set up.
          </p>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed font-light mb-4">
            Why make this interactive? Because coding challenges often disguise math problems as
            weird stories. I use various scenes to show how I break down these stories — not ignore
            them, but <em>lean into them</em> and make them fun.
          </p>
        </div>

        {/* Problem Cards */}
        <section className="grid gap-8 sm:grid-cols-2">
          {cardData.map(({ to, title, description, Icon }) => (
            <Link
              key={to}
              to={to}
              className="group p-6 rounded-2xl bg-[var(--color-surface)] shadow-md border border-transparent 
           hover:border-[var(--color-line)] transition-all duration-300 transform hover:translate-y-[-2px]"
            >
              <div className="flex items-center gap-4 mb-3">
                <Icon
                  size={28}
                  className="text-[var(--color-accent)] group-hover:scale-110 transition"
                />
                <h2 className="text-xl font-semibold font-montserrat group-hover:text-[var(--color-primary)] transition">
                  {title}
                </h2>
              </div>
              <p className="text-[var(--color-muted)] text-body">{description}</p>
            </Link>
          ))}
        </section>
      </div>
    </section>
  );
}
