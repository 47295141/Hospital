import {Module} from '@nestjs/common'
import {UserService} from './user_service'
import {UserController} from './user_controller'

@Module({
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule{}