import prisma from "@/app/libs/prisma";

interface getConversationProps {
  title: string;
}

export default async function getConversation({ title }: getConversationProps) {
  const conversation = await prisma.conversation.findUnique({
    where: {
      title: title,
    },
    include: {
      messages: {
        include: {
          user: true,
        },
      },
    },
  });
  if (!conversation) return null;

  return conversation;
}
