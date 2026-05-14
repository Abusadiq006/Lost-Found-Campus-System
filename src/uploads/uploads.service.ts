import {
  BadRequestException,
  Injectable,
} from '@nestjs/common';

import { randomUUID } from 'crypto';

import { SupabaseService } from '../supabase/supabase.service';
