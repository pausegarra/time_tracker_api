import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from 'src/user/domain/user.repository';

@Injectable()
export class AuthService {
  constructor(
    @Inject('UserRepository') private readonly userRepository: UserRepository,
  ) {}

  async login(email: string, password: string) {
    console.log(password);
    const user = await this.userRepository.findByEmail(email);
    return user;
  }
}
