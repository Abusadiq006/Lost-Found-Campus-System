import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { SupabaseService } from '../supabase/supabase.service';

import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UsersService {
  constructor(
    private readonly supabaseService: SupabaseService,
  ) {}

    async getProfile(userId: string) {
    const supabase = this.supabaseService.getClient();