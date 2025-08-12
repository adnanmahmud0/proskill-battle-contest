import TeamSection from "../../compunent/dashboard/TeamSection";
import Leaderboard from "../../compunent/leaderboard/Leaderboard";

export default function index() {
  return (
    <>
      <section className="">
        <div className="px-4 pt-20 lg:px-6">
          <TeamSection />
          <Leaderboard />
        </div>
      </section>
    </>
  );
}
