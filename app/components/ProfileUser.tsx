"use client";
import Image from "next/image";
import Link from "next/link";

const ProfileUser = ({ user }: any) => {
  return (
      <Link href={`/app/profile/${user.id}`}>
        <Image
          src={user.image}
          width={60}
          height={60}
          alt={`Logo of the user : ${user.image}`}
          className="rounded-full cursor-pointer"
        />
      </Link>
  );
};

export default ProfileUser;
