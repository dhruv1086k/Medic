import React from "react";

const achievements = [
  {
    title: "Promoting Mental Health Awareness",
    description: `Trained over 1,000+ tribal school superintendents as a Master Trainer with Pratham Education Foundation. Focused on improving mental health and emotional well-being in schools, working with government and private organizations.`,
  },
  {
    title: "Founder of Tender Years Learning Solutions",
    description: `Established an NGO dedicated to early childhood education and parenting support. Conducted 50+ workshops annually on child development, emotional health, and positive parenting techniques.`,
  },
  {
    title: "Improving Teacher Skills and Classroom Practices",
    description: `Led training programs for 4,000+ teachers, helping them improve classroom strategies and curriculum design. Introduced modern teaching methods like experiential learning and inquiry-based approaches to make learning more engaging.`,
  },
  {
    title: "Empowering Communities with Spoken English",
    description: `Delivered English language training to 2,000+ participants, including students and police families, through projects with the Times of India Group and Delhi Government. Improved communication skills by 35%.`,
  },
  {
    title: "International Training Expertise",
    description: `Conducted professional training sessions across 6 countries, increasing performance and engagement by 25%. Adapted training methods for diverse audiences, ensuring impactful results.`,
  },
  {
    title: "Supporting Families with Coaching and Guidance",
    description: `Designed parental coaching programs to help families build better relationships and emotional resilience. Conducted 50+ sessions annually, leading to improved mental health and family well-being.`,
  },
];

const AchievementCards = () => {
  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mb-14">
      {achievements.map((achievement, index) => (
        <div
          key={index}
          className="relative bg-gradient-to-b from-[#6d65ff] to-[#a09bff] text-white shadow-lg rounded-xl p-6 transform transition-all hover:-translate-y-2 hover:shadow-2xl"
        >
          <h3 className="text-xl font-bold mb-4">{achievement.title}</h3>
          <p className="text-sm leading-relaxed">{achievement.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AchievementCards;
