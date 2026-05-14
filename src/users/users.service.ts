import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { SupabaseService } from '../supabase/supabase.service';

import { UpdateUserDto } from './dto/update-user.dto';