import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';

import { CurrentUser } from '../auth/current-user.decorator';
import { SupabaseAuthGuard } from '../auth/supabase-auth.guard';

import { ClaimsService } from './claims.service';

import { CreateClaimDto } from './dto/create-claim.dto';
import { ReviewClaimDto } from './dto/review-claim.dto';