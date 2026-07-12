// config/team.ts

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imagePath: string;
}

export const teamData: TeamMember[] = [
  {
    id: "member-1",
    name: "Akarshit Mahajan",
    role: "Founder & Lead Architect",
    bio: "Passionate about engineering clean, high-performance web ecosystems and scalable architectures.",
    imagePath: "/images/team/member1.png"
  },
  {
    id: "member-2",
    name: "Aniket Sharma",
    role: "Co-Founder",
    bio: "Web Devolpement",
    imagePath: "/images/team/member2.png"
  },
  // {
  //   id: "member-3",
  //   name: "Abhay",
  //   role: "Designer",
  //   bio: "UI/UX Designer & Digital Marketing Expert",
  //   imagePath: "/images/team/Member3.jpeg"
  // },
   {
    id: "member-4",
    name: "Rahul Sharma",
    role: "Team Member",
    bio: "Designer & EveryTime Happy",
    imagePath: "/images/team/member4.png"
  },
  {
    id: "member-5",
    name: "Tejpal Sharma",
    role: "Team Member",
    bio: "Marketer & Communication Expert",
    imagePath: "/images/team/member5.png"
  }
];