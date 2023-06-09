import prismaClient from "../../prisma";

interface SubscribeRequest {
  user_id: string;
}

class SubscribeService {
  async execute({ user_id }: SubscribeRequest) {
    return user_id
  }
}

export { SubscribeService }