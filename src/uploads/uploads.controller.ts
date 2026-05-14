import {
  Controller,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';

import { FileInterceptor } from '@nestjs/platform-express';

import { SupabaseAuthGuard } from '../auth/supabase-auth.guard';

import { UploadsService } from './uploads.service';
