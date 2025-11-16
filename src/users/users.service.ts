import { Injectable } from '@nestjs/common';

export type User=any

@Injectable()
export class UsersService {
    private readonly users=[
        {
            id:1,
            username:'Test Admin',
            password:'admin123'
        }
    ]

   async findOne(username:string):Promise<User|undefined>{
        // 模拟接口请求延迟
        await new Promise((resolve)=>setTimeout(()=>{resolve},1000))
        return this.users.find((user)=> user.username===username);
    }


}
