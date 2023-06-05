import prismaClient from "../../prisma";

class UserDetailService{
  async execute(){
    return { ok: true }
  }
}

export { UserDetailService }