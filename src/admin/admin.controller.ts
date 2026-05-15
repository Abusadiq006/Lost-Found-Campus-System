import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';

import { SupabaseAuthGuard } from '../auth/supabase-auth.guard';
import { RolesGuard } from '../auth/roles.guard';

import { AdminService } from './admin.service';

@Controller('admin')
@UseGuards(
  SupabaseAuthGuard,
  RolesGuard,
)