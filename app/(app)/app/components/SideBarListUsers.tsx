interface SideBarListUsersProps {
  conversation: any;
}

const SideBarListUsers = ({ conversation }: SideBarListUsersProps) => {
  return (
    <div className="hidden md:block h-[100vh] p-6 border-l-4 border-[#095234]">
      <div className="flex flex-col items-center justify-between mb-4">
        <h1 className="text-3xl mb-4">Utilisateurs</h1>
        <input
          type="text"
          placeholder="Chercher un utilisateur... "
          className="border-4 rounded-lg bg-transparent border-[#095234] p-3"
        />
      </div>
    </div>
  );
};

export default SideBarListUsers;
