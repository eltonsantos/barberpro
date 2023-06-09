import { Response, Request } from "express";
import { SubscribeService } from '../../services/subscription/SubscribeService'

class SubscribeController{
  async handle(request: Request, response: Response){
    const user_id = request.user_id;

    const subscribeService = new SubscribeService();

    const subscribe = await subscribeService.execute({
      user_id
    })

    return response.json(subscribe);

  }
}

export { SubscribeController }