import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { SupabaseService } from '../supabase/supabase.service';

import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemsService {
  constructor(
    private readonly supabaseService: SupabaseService,
  ) {}

  async create(
    userId: string,
    dto: CreateItemDto,
  ) {
     const supabase = this.supabaseService.getClient();

    const payload = {
      ...dto,
      user_id: userId,
    };

    const { data, error } = await supabase
      .from('items')
      .insert(payload)
      .select()
      .single();

      if (error) {
      throw new ForbiddenException(error.message);
    }

    return data;
  }

  async findAll() {
    const supabase = this.supabaseService.getClient();

    const { data, error } = await supabase
      .from('items')
      .select(`
        *,
        users (
          full_name,
          profile_image
        ),
        campus_locations (
          name
        )
      `)
      .order('created_at', {
        ascending: false,
      });

        if (error) {
      throw new ForbiddenException(error.message);
    }

    return data;
  }

  async findOne(id: string) {
    const supabase = this.supabaseService.getClient();
    

    const { data, error } = await supabase
      .from('items')
      .select(`
        *,
        users (
          full_name,
          profile_image
        ),
        campus_locations (
          name
        )
      `)
      .eq('id', id)
      .single();