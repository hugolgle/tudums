import Header from "../composant/header";

export default function PageRules() {
  return (
    <>
      <Header />
      <section className="flex flex-col gap-2 text-black px-7 text-justify animate__animated animate__zoomIn animate__faster">
        <h1 className="font-logo text-center">The rules</h1>
        <h2 className="text-sm">Tudums is simple, just read carefully</h2>
        <p className="text-sm">
          1. The last person to watch a film will shuffle the cards{" "}
          <span className="italic">
            (we&apos;re counting on your impartiality).
          </span>
        </p>
        <p className="text-sm">
          2. Place the cards face down in the center of the table. You are now
          ready to reveal their secrets.
        </p>
        <p className="text-sm">
          3. The youngest player is the first Master of Ceremonies (MC). He
          draws a card, glances at the answer, then shows the picture to the
          other players without revealing the answer{" "}
          <span className="font-bold">
            (yes, he doesn&apos;t play this round).
          </span>{" "}
          Players have 30s to find the right answer.
        </p>
        <p className="text-sm">
          4. The first person to find the correct answer wins the card and
          becomes the MC for the next round.
        </p>
        <p className="text-sm">
          5. When all the cards have been revealed, the game ends.{" "}
          <span className="font-bold">
            The person who has the most cards WINS
          </span>
        </p>
        <p className="text-sm">
          All that remains is to crown the Tudum champion !
        </p>
        <p className="font-extrabold">Second version</p>
        <p className="text-sm">
          Launch a timer, and guess the most anwers in under 30s
        </p>
        <p className="text-sm">Good luck !</p>
      </section>
    </>
  );
}
