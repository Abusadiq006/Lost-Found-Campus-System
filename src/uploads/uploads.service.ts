import {
  BadRequestException,
  Injectable,
} from '@nestjs/common';

import { randomUUID } from 'crypto';

import { SupabaseService } from '../supabase/supabase.service';

@Injectable()
export class UploadsService {
  constructor(
    private readonly supabaseService: SupabaseService,
  ) {}

  async uploadItemImage(
    file: Express.Multer.File,
  ) {
    if (!file) {
      throw new BadRequestException(
        'No file uploaded',
      );
    }