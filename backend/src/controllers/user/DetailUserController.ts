import {Request, Response} from 'express'
import { UserDetailService } from '../../services/user/DetailUserService'

class DetailUserController{
  async handle(request: Request, response: Response){

    const user_id = request.user_id;

    console.log(user_id)

    const userDetailService = new UserDetailService();

    const detailUser = await userDetailService.execute();

    return response.json(detailUser);

  }
}

export { DetailUserController }