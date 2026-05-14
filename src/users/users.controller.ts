import {
  Body,
  Controller,
  Get,
  Patch,
  UseGuards,
} from '@nestjs/common';

import { CurrentUser } from '../auth/current-user.decorator'
import { SupabaseAuthGuard } from '../auth/supabase-auth.guard';