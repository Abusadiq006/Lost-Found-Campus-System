import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { SupabaseService } from '../supabase/supabase.service';

 async getAllUsers() {
    const supabase =
      this.supabaseService.getClient();

    const { data, error } = await supabase
      .from('users')
      .select('*')
      .order('created_at', {
        ascending: false,
      });