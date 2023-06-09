import prisma from "@/app/libs/prisma";

interface getConversationProps {
  title?: string;
  id?: string ;
}

export default async function getConversation({
  title,
  id,
}: getConversationProps) {
  // find conversation by title (default channel only)
  if (title) {
    const conversationByTitle = await prisma.conversation.findUnique({
      where: {
        title: title,
      },
      include: {
        users: {
          include: {
            Badge: true,
          },
        },
        messages: {
          include: {
            user: true,
          },
        },
      },
    });

    return conversationByTitle;
  }

  // find conversation by id (conversation with user)
  if (id) {
    const conversationById = await prisma.conversation.findUnique({
      where: {
        id: id,
      },
      include: {
        users: {
          include: {
            Badge: true,
          },
        },
        messages: {
          include: {
            user: true,
          },
        },
      },
    });
    return conversationById;
  }

  //default return
  return null;
}
