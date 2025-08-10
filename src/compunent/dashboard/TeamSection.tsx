import React from "react";
import TeamMemberCard from "./TeamMemberCard";
import { FaUserAlt, FaCalculator, FaSpinner, FaUsers } from "react-icons/fa";

const teamMembers = [
    {
        name: "200+",
        title: "Total Register",
        description: "Total number of registered users in the system.",
        icon: FaUserAlt,
    },
    {
        name: "3",
        title: "Total Computation",
        description: "Total computations performed so far.",
        icon: FaCalculator,
    },
    {
        name: "3",
        title: "Ongoing Computation",
        description: "Number of computations currently in progress.",
        icon: FaSpinner,
    },
    {
        name: "100+",
        title: "Participant",
        description: "Number of active participants involved.",
        icon: FaUsers,
    },
];

const TeamSection: React.FC = () => {
    return (
        <div className="grid gap-6 mb-6 md:grid-cols-4">
            {teamMembers.map((member, idx) => (
                <TeamMemberCard key={idx} {...member} />
            ))}
        </div>
    );
};

export default TeamSection;
