import React from "react";

interface TeamMemberCardProps {
    name: string;
    title: string;
    description: string;
    icon: React.ComponentType<{ size?: string | number; color?: string }>;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, title, description, icon: Icon }) => {
    return (
        <div className="flex items-center bg-gray-50 rounded-lg shadow p-5 dark:bg-gray-800 dark:border-gray-700">
            <div className="text-blue-500 mr-4">
                <Icon size={40} />
            </div>
            <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{name}</h3>
                <p className="text-gray-500 dark:text-gray-400 font-semibold">{title}</p>
                <p className="mt-1 text-sm font-light text-gray-500 dark:text-gray-400">{description}</p>
            </div>
        </div>
    );
};

export default TeamMemberCard;
